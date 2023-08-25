const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/august_pizza",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Connected to database!"))
    .catch( err => console.log("Something went wrong connecting to the database!", err))