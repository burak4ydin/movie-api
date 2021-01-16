const mongo = require('mongoose');
const Schema = mongo.Schema;
const bcrypt = require('bcryptjs');


const user = new Schema({
    username:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports= mongo.model('user',user);

