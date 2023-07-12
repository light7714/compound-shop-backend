const express = require('express');
const compoundController = require('../controllers/compound');

const router = express.Router();

router.get('/all', compoundController.getAllWithPagination);

router.get('/find/:id', compoundController.getCompoundById);

router.put('/edit', compoundController.editCompound)

module.exports = router;