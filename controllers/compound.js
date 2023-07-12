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

exports.editCompound = async (req, res, next) => {
	const compoundData = req.body;
	const newDate = new Date();
	let compound = null;

	// console.log("inside editCompound", compoundData);
	compound = await compoundModel.findOne({
		where: {
			ID: compoundData.ID
		}
	})

	if (!compound) {
		res.status(404).json({
			message: 'Compound with requested ID not found'
		})
	} else {
		compound = compoundModel.update({
			ID: compoundData.ID,
			CompoundName: compoundData.CompoundName,
			CompoundDescription: compoundData.CompoundDescription,
			ImageSource: compoundData.ImageSource,
			ImageAttribution: compoundData.ImageAttribution,
			DateModified: newDate
		}, {
			where: {
				ID: compoundData.ID
			}
		})

		res.status(200).json({
			message: "Compound Successfully edited",
			data: compound
		})
	}
}
