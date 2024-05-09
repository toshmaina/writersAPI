const [{ createClient }, logEvents] = [
	require("redis"),
	require("../lib/logEvents"),
];

const handleRedisCacheConnection = async () => {
	const [REDIS_HOST, REDIS_PORT, REDIS_PASSWORD] = [
		process.env.REDIS_HOST,
		process.env.REDIS_PORT,
		process.env.REDIS_PASSWORD,
	];
	if (![REDIS_HOST, REDIS_PORT, REDIS_PASSWORD].every(Boolean)) {
		logEvents({
			logName: "error",
			message: "failed to load redis environment variables",
		});
		return false;
	}
	console.log("Ready to connect to redis server");
	const client = createClient({
		password: REDIS_PASSWORD,
		socket: {
			host: REDIS_HOST,
			port: REDIS_PORT,
		},
	});
	try {
		await client.connect();
		/* 		client.on("error", (error) => {
			throw new Error(error);
		}); */
		console.log("connected to redis cache server");
	} catch (error) {
		console.log("error connecting to redis cache server");
		logEvents({ logName: "error", message: error.message });
		return false;
	}
	return client;
};

module.exports = handleRedisCacheConnection;
