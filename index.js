const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ greet: "Hello there!" }).status(200).end();
});

app.listen(1337, console.log("Server started! Listening on port 1337"));
