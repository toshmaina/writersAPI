const [
	connectToRedis,
	logErrors,
	cookieParser,
	express,
	path,
	PORT,
	cors,
	getWidgets,
	cachedEmployers,
	getEmployers,
	removeEmployers,
	deactivateEmployers,
	getEmployer,
	removeEmployer,
	deactivateEmployer,
	updateEmployer,
	getWriter,
	deactivateWriter,
	updateWriter,
	getCachedWriters,
	getWritersDetails,
	handleNewUser,
	loginUser,
	logoutUser,
	verifyJWT,
	generateAccessTokenFromRefreshToken,
	connectToDB,
	mongoose,
	getCachedUsers,
	getUsers,
	getUser,
	corsOptions,
	verifyOrigins,
	getSubscribers,
	getCachedSubscribers,
	getSubscriber,
	deactivateSubscriber,
	updateSubscriber,
	rateLimitMiddleware,
	generateApiKey,
	verifyApiKey,
] = [
	require("./config/connectToRedisCache"),
	require("./middleware/handleErrors"),
	require("cookie-parser"),
	require("express"),
	require("path"),
	process.env.PORT || 8000,
	require("cors"),
	require("./controllers/widgets"),
	require("./middleware/getCachedEmployers"),
	require("./routes/employers"),
	require("./routes/removeEmployers"),
	require("./routes/deactivateEmployers"),
	require("./routes/employer"),
	require("./routes/removeEmployer"),
	require("./routes/deactivateEmployer"),
	require("./routes/updateEmployer"),
	require("./routes/writer"),
	require("./routes/deactivateWriter"),
	require("./routes/updateWriter"),
	require("./middleware/getCachedWriters"),
	require("./routes/writers"),
	require("./routes/register"),
	require("./routes/login"),
	require("./routes/logout"),
	require("./middleware/verifyJWT"),
	require("./routes/refresh"),
	require("./config/connectToMongoDB"),
	require("mongoose"),
	require("./middleware/getCachedUsers"),
	require("./routes/users"),
	require("./routes/user"),
	require("./config/allowedOrigins"),
	require("./middleware/verifyOrigins"),
	require("./routes/subscribers"),
	require("./middleware/getCachedEmployers"),
	require("./routes/subscriber"),
	require("./routes/deactivateSubscriber"),
	require("./routes/updateSubscriber"),
	require("./middleware/limitRequestsRate"),
	require("./routes/apiKey"),
	require("./middleware/verifyApiKey"),
];
const app = express();

app.use(logErrors);
connectToDB();
connectToRedis();

require("dotenv").config();
//built in middleware to serve all of the static files that are to be sent to the client
app.use(express.static(path.join(__dirname, "public")));
//built in middleware to serve to handle json data sent from the server
app.use(express.json());

//serve all the cookies in client-server communication

app.use(cookieParser());
//CUSTOM MIDDLEWARE

//BUILT IN MIDDLEWARE
app.use(verifyOrigins);
//built in middleware to serve the cross origin resource sharing protocol
app.use(cors(corsOptions));
app.use(rateLimitMiddleware);
app.use("/api/apiKey", generateApiKey);

app.use(verifyApiKey);

app.use("/api/users", getCachedUsers, getUsers);
app.use("/api/user", getUser);
app.use("/api/employers", cachedEmployers, getEmployers);
app.use("/api/employers", getEmployer); //
app.use("/api/writers", getCachedWriters, getWritersDetails);
app.use("/api/register", handleNewUser);
app.use("/api/login", loginUser);
app.use("/api/refresh", generateAccessTokenFromRefreshToken);
app.use("/api/logout", logoutUser);
app.use("/api/widgets", getWidgets);

app.use(verifyJWT);

app.use("/api/subscribers", getCachedSubscribers, getSubscribers);
app.use("/api/subscriber", getSubscriber);
app.use("/api/writer", getWriter);
//verify roles only admins are allowed to delete an employer
app.use("/api/remove/employers", removeEmployers);
app.use("/api/remove/employer", removeEmployer);
app.use("/api/update/employer", updateEmployer);
app.use("/api/deactivate/employers", deactivateEmployers);
app.use("/api/deactivate/employer", deactivateEmployer);

app.use("/api/deactivate/subscriber", deactivateSubscriber);
app.use("/api/update/subscriber", updateSubscriber);

app.use("/api/deactivate/writer", deactivateWriter);
app.use("/api/update/writer", updateWriter);

mongoose.connection.once("connected", () => {
	console.log("Connected to MongoDB database");
	app.listen(PORT, () => {
		console.log(`Server Listening on port ${PORT}`);
	});
});
