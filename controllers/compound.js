const compoundModel = require('../models/compound');

const pageLimit = 9;

exports.getAllWithPagination = async (req, res, next) => {
	const pageNumber = req.query.page;
	const compounds = await compoundModel.findAndCountAll({
		offset: ((pageNumber - 1) * pageLimit) | 0,
		limit: pageLimit,
		order: ['ID'],
	});

	res.status(200).json({
		message: 'Succesfully found paginated compound data',
		data: compounds,
	});
};

exports.getCompoundById = async (req, res, next) => {
	const Id = req.params.id;
	const compound = await compoundModel.findByPk(Id);
	res.status(200).json({
		message: 'Succesfully found compound data',
		data: compound,
	});
};
