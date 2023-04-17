import {Router} from 'express';
import db from '../database/database.js';
const {User} = db.models;

const router = new Router();

router.get("/", async (req , res) =>{
    res.render("login", {at: req.session.authenticated});
});

router.post("/", async (req, res) =>{
    let dado = req.body
    const user = await User.findOne({where : {
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
});

export default router;