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

router.route("/from-to").post(expenditureController.getAllExpendituresFromTo);

router
  .route("/sum/from-to")
  .post(expenditureController.getAllExpendituresFromToSum);

module.exports = router;
