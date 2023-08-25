const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    name: String,
    size: String,
    description: String

}, {timestamps: true})

module.exports = (mongoose.model("Pizza", PizzaSchema));