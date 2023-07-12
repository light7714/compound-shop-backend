const sequelize  =  require('./index');
const { DataTypes } = require('sequelize');
// module.exports = (sequelize, Sequelize) => {
// 	const Compound = sequelize.define('compound', {
// 		ID: {
// 				type: Sequelize.INTEGER,
// 				allowNull: false,
// 				primaryKey: true
// 		},
// 		CompoundName: {
// 				type: Sequelize.STRING,
// 				allowNull: false,
// 		},
// 		CompoundDescription: {
// 				type: Sequelize.STRING,
// 				allowNull: false,
// 		},
// 		ImageSource: {
// 				type: Sequelize.STRING
// 		},
// 		ImageAttribution: {
// 				type: Sequelize.STRING,
// 		},
// 		DateModified: {
// 				type: Sequelize.DATE,
// 				allowNull: false,
// 		}
// 	});

// 	return Compound;
// };

const Compound = sequelize.define('Compound', {
	ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
	},
	CompoundName: {
			type: DataTypes.STRING,
			allowNull: false,
	},
	CompoundDescription: {
			type: DataTypes.STRING(5000),
			allowNull: false,
	},
	ImageSource: {
			type: DataTypes.STRING
	},
	ImageAttribution: {
			type: DataTypes.STRING,
	},
	DateModified: {
			type: DataTypes.DATE,
			allowNull: false,
	}

})

module.exports = Compound;