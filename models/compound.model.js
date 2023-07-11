const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
	const Compound = sequelize.define("compound", {
		id: {
			type: Sequelize.NUMBER
		},
		name: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		image: {
			type: Sequelize.STRING
		}
	});

	return Compound;
}