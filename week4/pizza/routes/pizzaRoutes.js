const PizzaController = require("../controllers/pizzaController");

module.exports = app => {
    app.get("/api/pizza", PizzaController.findAll);
    app.post("/api/pizza", PizzaController.create);
}