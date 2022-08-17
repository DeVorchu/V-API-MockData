const express = require("express");
const app = express();
require('dotenv').config();

const db = require("./models");

app.use(express.json())
//Routers
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

db.sequelize.sync().then(() =>{
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
