const express = require("express");
const app = express();
const port = 8000;
require("./config/mongoose")

app.use(express.json(), express.urlencoded({extended:true}));

require("./routes/pizzaRoutes")(app);

app.listen(port, ()=>console.log(`Server up and running on ${port}`));