const express = require("express");
const route = express.Router();
const User = require("../models/User.js")
const Post = require("../models/Post.js");

route.get("/", (req,res) => {
    
    if(req.session.authenticated){
        res.render("home",{user: req.session.user});
    }else{
        res.redirect("/login");
    }
});

route.post("/", async (req, res) =>{
    console.log(req.body)
    if(req.session.authenticated){
        if (req.body.text != ""){
            const post = await Post.create({post:req.body.text}); 
            const user = await User.findByPk(req.session.user.id);
            await user.addPost(post);
            await user.save();
            
        }else{
            res.redirect("/index");
        }
    }else{
        res.redirect("/login");
    };
})

module.exports = route;