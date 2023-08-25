const drinkArray = require("../fakeDB/fakeDB");

module.exports = {
    findAllDrinks: (req, res) => {
        return res.json(drinkArray.drinks)
    },

    findOneDrink: (req, res) => {
        const drinkId = req.params.id;
        for (drink of drinkArray.drinks){
            if (drink.id === parseInt(drinkId)){
                return res.json(drink);
            }
        }
    },

    createDrink: (req, res) => {
        const newDrink = {
            name: req.body.name,
            price: req.body.price,
            ingredients: req.body.ingredients
        };
        const currHighestID = drinkArray.drinks[drinkArray.drinks.length - 1].id
        newDrink.id = currHighestID + 1;
        res.json(newDrink);
    },

    updateDrink: (req, res) => {
        const drinkId = req.params.id;
        let selectedDrink;
        for (drink of drinkArray.drinks){
            if (drink.id === parseInt(drinkId)){
                selectedDrink = drink;
            }
        }
       for ( [key, val] of Object.entries(req.body)) {
        selectedDrink[key] = val;
       }
        res.json(selectedDrink);
    },

    deleteDrink: (req, res) => {
        const drinkId = req.params.id;
        const filteredDrinks = drinkArray.drinks.filter( drink => drink.id !== parseInt(drinkId));
        drinkArray.drinks = filteredDrinks;
        res.json(drinkArray.drinks);
    }
}