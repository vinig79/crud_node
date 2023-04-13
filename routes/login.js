const express = require("express");
const route = express.Router();
const User = require("../models/User.js");


route.get("/", async (req , res) =>{
    res.send("running");
    //res.render("login", {at: req.session.authenticated});
})

route.post("/", async (req, res) =>{
    let dado = req.body
    user = await User.findOne({where : {
        email : dado.email,
        senha : dado.senha
    }});
    if(user != null){
        console.log(req.sessionID);
        req.session.user =  user;
        req.session.authenticated =  true;
        res.json({redirect: "/index"});
    }else{
        res.json({redirect: "/login"});
    };
})


module.exports = route;