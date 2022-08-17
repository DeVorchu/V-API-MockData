const express = require('express')
const router = express.Router()
const { Users } = require("../models")

router.get("/", async (req,res) => {
    const listOfUsers = await Users.findAll()
    res.json(listOfUsers)
});

router.get("/:id", async (req,res) => {
    const userInfo = await Users.findByPk(req.params.id)
    res.json(userInfo)
});

router.post("/", async (req, res) => {
    const user = req.body
    await Users.create(user)
    res.json(user)
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
        res.json("USER NOT FOUND!");
    }
    
});


module.exports = router