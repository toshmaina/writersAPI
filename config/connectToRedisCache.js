const { createClient } = require("redis");

const handleRedisCacheConnection = async () => {
	if (
		![
			process.env.REDIS_HOST,
			process.env.REDIS_PORT,
			process.env.REDIS_PASSWORD,
		].every(Boolean)
	) {
		logEvents({
			logName: "error",
			message: "failed to load redis environment variables",
		});
		return false;
	}
	console.log("Ready to connect to redis server");
	const client = createClient({
		password: process.env.REDIS_PASSWORD,
		socket: {
			host: process.env.REDIS_HOST,
			port: process.env.REDIS_PORT,
		},
	});
	try {
		await client.connect();
		console.log("connected to redis cache server");
	} catch (error) {
		console.log("error connecting to redis cache server");
		logEvents({ logName: "error", message: error.message });
		return false;
	}
	return client;
};

module.exports = handleRedisCacheConnection;
