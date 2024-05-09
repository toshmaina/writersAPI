const [connectToRedis, Employer, Subscriber, User, Widget, Writer] = [
	require("../config/connectToRedisCache"),
	require("../models/Employer"),
	require("../models/Subscriber"),
	require("../models/User"),
	require("../models/Widget"),
	require("../models/Writer"),
];

const getCachedResults = async ({ key }) => {
	const mapModels = new Map([
		["employers", Employer],
		["subscribers", Subscriber],
		["writers", Writer],
		["widgets", Widget],
		["users", User],
	]);
	console.log(key);
	const client = await connectToRedis();
	if (!client) return;
	const response = await client.get(key);
	const data = JSON.parse(response);
	if (Array.isArray(data) && data[0]) return data;
	await Promise.all([
		client.set(key, JSON.stringify(await mapModels.get(key)?.find().exec())),
		client.expire(key, 3600),
	]);
};
module.exports = getCachedResults;
