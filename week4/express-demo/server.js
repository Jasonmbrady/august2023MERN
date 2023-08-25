const express = require("express");
const app = express();
// const port = 8000;
  
require('./routes/routes')(app);

app.listen(8000, ()=>console.log("Server up and running on 8000"));