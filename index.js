const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

const db = require("./models");

const users = require('./db/users');

app.use(express.json())
//Routers
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

db.sequelize.sync().then(() =>{
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
