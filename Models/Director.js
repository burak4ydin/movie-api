const mongo = require('mongoose');
const Schema = mongo.Schema;

const director = new Schema({
    name:String,
    surname:String,
    bio:String
});

module.exports = mongo.model('director',director);