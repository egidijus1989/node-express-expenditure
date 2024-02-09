const fs = require('fs')
const Expenditure = require('./../models/expenditureModel')

//Callbaks\\////////////////////////////////

//GetAllExpenditures\\//////////////////////
exports.getAllExpenditures = async (req, res)=>{
    try{
        const expenditures = await Expenditure.find()
        res.status(200).json({
            status: "success",
            results: `Is viso yra: ${expenditures.length} islaidu`,
            data: {expenditures}
        })
    }catch(err){
        
    }
}
//GetExpendituresByDate\\///////////////////

//GetExpendituresByDateSum\\////////////////

//CreateExpenditure\\///////////////////////
exports.createExpenditure = async (req, res) =>{
    try{
        const newExpenditure = await Expenditure.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Expenditure is added",
            data: {newExpenditure}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
//UpdateExpenditure\\///////////////////////
exports.updateExpenditure = async (req, res) =>{
    try{
        const expenditure = await Expenditure.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "Expenditure is updated",
            data: {expenditure}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}

//DeleteExpenditure\\///////////////////////
exports.deleteExpenditure = async (req, res) =>{
    try{
        await Expenditure.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "expenditure is deleted",
            data: null
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
/////////////////////////////////////////////
