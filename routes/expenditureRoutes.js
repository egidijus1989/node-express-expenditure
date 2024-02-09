const express = require('express');
const router = express.Router();
const expenditureController = require('../controllers/expenditureController')

router.route('/')
.get(expenditureController.getAllExpenditures)
.post(expenditureController.createExpenditure)

router.route('/:id')
.patch(expenditureController.updateExpenditure)
.delete(expenditureController.deleteExpenditure)

// router.route('/period')
// .get(expenditureController.getAllExpenditures)

// router.route('/period-sum')
// .get(expenditureController.getAllExpenditures)

module.exports = router