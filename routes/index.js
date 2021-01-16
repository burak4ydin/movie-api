var express = require('express');
var router = express.Router();
var crypto = require('bcryptjs');
const jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juniorita' });
});
//Model
const User = require('../Models/User');

router.post('/login',(req,res,next)=>{
    const username = req.body.username;
    const pass = req.body.password;
    const promise = User.findOne({username:req.body.username});
    promise.then(data=>{
        if(!data)
            res.json({
              status:false,
              message:'User not found'
            })
        else
            crypto.compare(pass,data.password,(err,result)=>{
            if(!result)
                res.json({
                  status:false,
                  message:'wrong password'
                })
            else{
                var payload = {
                  username,
                };
                const token = jwt.sign(payload, req.app.get('api_secret_key'),{
                  expiresIn:720 //dk cinsinden 12 saat
                });
                res.json({
                  status:true,
                  token
                })}
        })
    }).catch(err=>{
        res.json(err);
    })

})

module.exports = router;
