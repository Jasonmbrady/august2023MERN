const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(
    // Cross Origin Resource Sharing
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    }),
    express.json(),
    express.urlencoded({extended: true}),
    cookieParser()
);
require("./config/mongoose");
require("./routes/user")(app);

app.listen(8000, ()=>console.log("Server listening on port 8000"));