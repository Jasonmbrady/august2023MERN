const Pizza = require("../models/Pizza");

module.exports = {
    findAll: (req, res) => {
        Pizza.find()
            .then( allPizzas => res.json(allPizzas) )
            .catch( err => console.log(err))
    },

    create: (req, res) => {
        Pizza.create(req.body)
            .then( newPizza => res.json(newPizza) )
            .catch( err => console.log(err))
    }
}