const express = require("express");
const cors = require("cors");
const compoundDb = require("./models/compound");
// const sequelize = require("./models/index");
// const db = require('./models');
const compoundRoutes = require("./routes/compound")

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

compoundDb.sync()
.then((result) => {
	console.log("compound db synced");
})
.catch((err) => {
	console.log("Error in compound db synccc:", err.message);
})

// compoundDb.findAll()
// .then(res => {console.log("hello", res);})

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to Compound Shop" });
});

app.use('/compounds', compoundRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});