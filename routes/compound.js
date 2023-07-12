const express = require('express');
const compoundController = require('../controllers/compound');

const router = express.Router();

router.get('/all', compoundController.getAllWithPagination);

router.get('/:id', compoundController.getCompoundById);

module.exports = router;