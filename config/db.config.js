module.exports = {
  HOST: "db4free.net",
  USER: "shubham14",
  PASSWORD: "12345678",
  DB: "compoundshop",
  dialect: "mysql",
	pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};