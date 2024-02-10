const express = require("express");
const router = express.Router();
const expenditureController = require("../controllers/expenditureController");

router
  .route("/")
  .get(expenditureController.getAllExpenditures)
  .post(expenditureController.createExpenditure);

router
  .route("/:id")
  .patch(expenditureController.updateExpenditure)
  .delete(expenditureController.deleteExpenditure);

router.route("/:from/:to").get(expenditureController.getAllExpendituresFromTo);

router
  .route("/sum/:from/:to")
  .get(expenditureController.getAllExpendituresFromToSum);

module.exports = router;
