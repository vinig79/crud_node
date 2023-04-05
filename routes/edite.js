const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router.get('/', async (req, res) => {
    if(req.session.authenticated){
        let id = req.query.id;
        let post = await Post.findByPk( id);
        res.render('edite', {post});
    }else{
        res.redirect("/login")
    }
})

router.patch('/', async (req, res) => {
    let data = req.body;
    console.log(data);
    Post.update({post: data.post},{where:{
        id: data.id
    }});
})

module.exports = router;