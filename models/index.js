const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
	dialectOptions: {
		connectTimeout:100000
	},
	// define: { "id": false, "freezeTableName": true, "createdAt": false, "updatedAt": false },
	define: { "id": false, "createdAt": false, "updatedAt": false },
	logging: console.log, 
	pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

try {
	sequelize.authenticate();
	console.log("Connection to database estabilished");
} catch (err) {
	console.log("Failed to connect to database: ", err);
}

module.exports = sequelize;

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.compounds = require("./compound.model.js")(sequelize, Sequelize);

// module.exports = db;