const express = require('express');
const app = express();
const port = 8000;


app.use(express.json(), express.urlencoded({extended: true}));
require("./routes/drinkRoutes")(app);

app.listen( port, () => console.log(`Server running on port ${port}`));