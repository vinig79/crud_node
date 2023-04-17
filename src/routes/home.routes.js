import {Router} from 'express';
import db from '../database/database.js';
const {User,Post} = db.models;

const router = new Router();

router.get("/", (req,res) => {
    
    if(req.session.authenticated){
        res.render("home",{user: req.session.user});
    }else{
        res.redirect("/login");
    }
});

router.post("/", async (req, res) =>{
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
});

export default router;