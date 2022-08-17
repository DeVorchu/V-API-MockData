const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

const users = require('./db/users')

require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/login",(req,res) => {
    const loginRes = users.find(x => x.nick === req.body.nick )

    if (typeof loginRes !== "undefined") {
        //TO DO: Auth on 200 
        loginRes.pw === req.body.pw ? res.status(200).send('OK') : res.status(401).send('Bad password!')
    } else {
        res.status(404).send('User not found!')
    }
});
    

app.use("/", router);


app.listen(process.env.PORT, () => {
 console.log(`Server running on port ${process.env.PORT}`);
});
