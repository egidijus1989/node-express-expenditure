const fs = require("fs");
const Expenditure = require("./../models/expenditureModel");

//Callbaks\\////////////////////////////////

//GetAllExpenditures\\//////////////////////
exports.getAllExpenditures = async (req, res) => {
  try {
    const expenditures = await Expenditure.find();
    res.status(200).json({
      status: "success",
      results: `Is viso yra: ${expenditures.length} islaidos`,
      data: { expenditures },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//GetExpendituresByDate\\///////////////////
exports.getAllExpendituresFromTo = async (req, res) => {
  try {
    let expenditures = await Expenditure.find({
      date: { $gte: new Date(req.body.from), $lte: new Date(req.body.to) },
    });
    res.status(200).json({
      status: "success",
      results: `Duotuoju laikotarpiu is viso yra: ${expenditures.length} islaidu`,
      data: { expenditures },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//GetExpendituresByDateSum\\////////////////
exports.getAllExpendituresFromToSum = async (req, res) => {
  try {
    const expenditures = await Expenditure.find({
      date: { $gte: new Date(req.body.from), $lte: new Date(req.body.to) },
    });
    let sum = 0;
    for (const expenditure of expenditures) {
      sum += expenditure.amount;
    }
    console.log(sum);
    res.status(200).json({
      status: "success",
      results: `Duotuoju laikotarpiu islaidu buvo: ${expenditures.length}`,
      data: { sum },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//CreateExpenditure\\///////////////////////
exports.createExpenditure = async (req, res) => {
  try {
    const newExpenditure = await Expenditure.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Expenditure is added",
      data: { newExpenditure },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//UpdateExpenditure\\///////////////////////
exports.updateExpenditure = async (req, res) => {
  try {
    const expenditure = await Expenditure.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      message: "Expenditure is updated",
      data: { expenditure },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//DeleteExpenditure\\///////////////////////
exports.deleteExpenditure = async (req, res) => {
  try {
    await Expenditure.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "expenditure is deleted",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
/////////////////////////////////////////////
