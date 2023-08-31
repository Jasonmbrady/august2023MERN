const Person = require("../models/Person");

module.exports = {
    findAllPeople: (req, res) => {
        Person.find()
            .then( allPeople => res.json(allPeople))
            .catch( err => console.log(err));
    },

    createPerson: (req, res) => {
        Person.create(req.body)
            .then( newPerson => res.json(newPerson))
            .catch( err => res.json(err));
    },

    findOnePerson: (req, res) => {
        Person.findById(req.params.id)
            .then( onePerson => res.json(onePerson))
            .catch( err => console.log(err));
    },

    updatePerson: (req, res) => {
        Person.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then( updatedPerson => res.json(updatedPerson))
            .catch( err => console.log(err));
    },

    deletePerson: (req, res) => {
        Person.findByIdAndDelete(req.params.id)
            .then( result => res.json({result: result}))
            .catch( err => console.log(err));

    }
}