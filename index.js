const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

require('dotenv').config();

const users =[
    {
        id: 1,
        nick: 'Vorczu',
        pw:'test'
    }
]
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/login",(req,res) => {
    const loginRes = users.find(x => x.nick === req.body.nick )
    console.log(loginRes);

    if (typeof loginRes !== "undefined") {
        console.log("here");
        loginRes.pw === req.body.pw ? res.status(200).send('OK') : res.status(401).send('Bad password!')
    } else {
        res.status(404).send('User not found!')
        console.log("here3");
    }
});
    

app.use("/", router);


app.listen(process.env.PORT, () => {
 console.log(`Server running on port ${process.env.PORT}`);
});
