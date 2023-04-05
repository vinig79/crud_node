const express = require('express');
const router = express.Router();
const User = require("../models/User.js");

router.get("/", (req,res) => {
    res.render("register", {at: req.session.authenticated});
})

router.post("/", async (req,res) => {
    let data = req.body;
    let user = await User.findOne({where:{email: data.email}});
    let cert = data.senha_1 == data.senha_2;
    console.log(data);
    console.log(user)  ; 
    if (user == null &&  cert){
        await User.create({nome:data.nome,senha:data.senha_1,email:data.email});
        res.json({redirect: "/index"});
    }else{
        res.json({redirect: "/register"})
    }
})


module.exports = router