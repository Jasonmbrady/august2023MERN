const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mern-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=> console.log("Connection to DB established!!!"))
    .catch( err => console.log("Something went wrong!", err));