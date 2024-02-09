const mongoose = require("mongoose")

const expenditureSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "An expenditure must have a name"],
        unique: true,
    },
    amount:{
        type:Number,
        required:[true, 'expenditure must have a sum number'],
    },
    date:{
        type:Date,
        required: [true, "Expenditure must have and date"],
    },
    description:{
        type:String,
        required:[true, "Expenditure must have a description, date type: YYYY-mm-dd"]
    }
})

const Expenditure = mongoose.model('Expenditure', expenditureSchema)

module.exports = Expenditure