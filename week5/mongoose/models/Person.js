const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Wahoo!"],
        minlength: [3, "First name must be at least 3 characters long!"]
    },
    lastName: {
        type: String,
        maxlength: [12, "Last name must be 12 or fewer characters"]
    },
    age: {
        type: Number,
        min: [13, "You must be at least 13 years old!"]
    }
}, {timestamps: true})

module.exports = (mongoose.model("Person", PersonSchema));
