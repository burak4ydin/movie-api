const mongo = require('mongoose');

module.exports = ()=>{
    mongo.connect('mongodb+srv://admindb:burak159963.@firstcluster.x7faw.mongodb.net/movie_api',{ useNewUrlParser: true , useUnifiedTopology: true} );
    mongo.connection.on('open',()=>{
        console.log('Database connected');
    });
    mongo.connection.on('error',()=>{
        console.log('Database didnt connect');
    });

    mongo.Promise = global.Promise;
}