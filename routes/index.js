const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const Post = require("../models/Post.js");


router.get("/", (req, res) => {
    res.redirect("/index");
})

router.get("/index",async (req, res) => {
    if(req.session.authenticated){
        console.log(req.session.user.comment )
        user = await User.findByPk(req.session.user.id,{include: Post});
        posts = user.posts;
        console.log(posts)
        res.render("index", {posts});
        
    }else{
        res.redirect("/login")
    }
    
})

router.delete("/index", async (req, res) => {
    let data = req.body;
    console.log(!!Object.keys(data["checkBox"]).length);
    console.log(data);
    if(!!Object.keys(data).length){
        for (let item of data["checkBox"]) {
            await Post.destroy({where:{id: item}});
            
        }
    res.redirect("/index");
    }else{
        res.redirect("/index");
    }
   
})

module.exports = router