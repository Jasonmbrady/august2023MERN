const express = require("express");
const app = express();
app.use(express.json(), express.urlencoded({extended: true}))
require("./config/mongoose");

require("./routes/person")(app);
app.listen( 8000, ()=>console.log("Server running on port 8000"));
