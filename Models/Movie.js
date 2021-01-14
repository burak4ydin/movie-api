const mongo = require('mongoose');
const Schema = mongo.Schema;

const Movie = new Schema({
    director_id : Schema.Types.ObjectId,
    title: {
        type:String,
        required:true
    },
    category:String,
    country:String,
    year:Number,
    imdb_score:{
        type:Number,
        max:10
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports= mongo.model('movie',Movie);