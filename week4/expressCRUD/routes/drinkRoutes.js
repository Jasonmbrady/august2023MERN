const DrinksController = require("../controllers/drinksController");

module.exports = app => {
    app.get("/api/drinks", DrinksController.findAllDrinks);
    app.get("/api/drinks/:id", DrinksController.findOneDrink);
    app.post("/api/drinks", DrinksController.createDrink);
    app.patch("/api/drinks/:id", DrinksController.updateDrink);
    app.delete("/api/drinks/:id", DrinksController.deleteDrink);
}