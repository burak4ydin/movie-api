const express = require('express');
const router = express.Router();
const crypto = require('bcryptjs');

//Model
const User = require('../Models/User');

router.post('/',(req,res)=>{
    const username=req.body.username;
    const password = crypto.hash(req.body.password,7,(err,encrypted)=>{
        const newuser = new User({
        username,
        password:encrypted
    });
    const promise = newuser.save();
    promise.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json(err);
    })
    })
    
    
    

});

module.exports = router;