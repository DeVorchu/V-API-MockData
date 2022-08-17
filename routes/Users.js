const express = require('express')
const router = express.Router()
const { Users } = require("../models")

router.get("/", async (req,res) => {
    const listOfUsers = await Users.findAll()
    listOfUsers.length > 0?    
        res.json({statusCode: 200, msg: '', data : listOfUsers}) :
        res.json({statusCode: 205, msg: 'No data', data : {}})
    
});

router.get("/:id", async (req,res) => {
    const userInfo = await Users.findByPk(req.params.id)
    userInfo?   
        res.json({statusCode: 200, msg: '', data : userInfo}) :
        res.json({statusCode: 404, msg: 'User not found!', data: {}}) 
});

router.post("/", async (req, res) => {
    const user = req.body
    await Users.create(user)
    res.json({statusCode: 201, msg: '', data : user})
});

router.delete("/:id", async (req, res) => {

    const user = await Users.findByPk(req.params.id)
    if (user) {
        await Users.destroy({
            where: {
              id: req.params.id
            },
          });
        res.json("DELETED SUCCESSFULLY");
    } else {
        res.json({statusCode: 404, msg: 'User not found!', data: {}});
    }
    
});


module.exports = router