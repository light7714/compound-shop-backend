const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

try {
	await db.sequelize.sync();
	console.log("db synced");
} catch(err) {
	console.log("Failed to sync db" + err.message);
}

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to Compound Shop" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});