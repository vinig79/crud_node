import {Router} from 'express';
import db from '../database/database.js';
const {Post, User} = db.models;

const router = new Router();

router.get("/", (req, res) => {
    res.redirect("/index");
})

router.get("/index",async (req, res) => {
    if(req.session.authenticated){
        const user = await User.findOne({where: {id: req.session.user.id}, include: Post});
        const posts = user.posts;
        console.log(posts)
        res.render("index", {posts});
        
    }else{
        res.redirect("/login")
    }
    
});

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
   
});

export default router;