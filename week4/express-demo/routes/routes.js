const userController = require('../controllers/users')

module.exports = (app) => {
    app.get("/api/users", userController.getAll);
    app.get("/api/greeting", userController.greeting);
    app.patch("/api/users", );  // RESTful routing
}