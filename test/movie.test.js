const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');


chai.use(chaiHttp);

let token,movieID;


describe('/POST get Token \n',()=>{
    before((done)=>{
        chai.request(server)
        .post('/login')
        .send({username:'burak',password:'burak123'})
        .end((err,res)=>{
            token=res.body.token;
            done();
        })
    })
    describe('/GET list all movies',()=>{
        it('/List test \n',(done)=>{
            chai.request(server)
            .get('/api/movie')
            .query({
                token:token
            })
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('array');
                
                done();
            })
        });
    });
    describe('/POST add movies',()=>{
        it('/Add test \n',done=>{
            chai.request(server)
            .post('/api/movie')
            .send({
                title:'Test Film',
                director_id:'5fff3e192428383741b7d113',
                category:'test',
                country:'turkey',
                year:2000,
                imdb_score:10
            })
            .query({
                token:token
            })
            .end((err,res)=>{
                res.body.should.have.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('director_id');
                res.body.should.have.property('category');
                res.body.should.have.property('country');
                res.body.should.have.property('year');
                res.body.should.have.property('imdb_score');
                movieID= res.body._id;

                
                done();
            })
        })
        });
    describe('/GET list movies by given id',()=>{
        it('listing by id \n',done=>{
            chai.request(server)
            .get('/api/movie/'+movieID)
            .send({
                token:token
            })
            .end((err,res)=>{
                res.should.have.status(200);
                console.log(res.body);
                done();
                // res.body.should.be.a('array');
                
                // res.body.should.have.property('title');
                // res.body.should.have.property('director_id');
                // res.body.should.have.property('category');
                // res.body.should.have.property('country');
                // res.body.should.have.property('year');
                // res.body.should.have.property('imdb_score');
            })
        })
    });
    describe('/PUT update film by id',()=>{
        it('/updated',done=>{
            chai.request(server)
            .put('/api/movie/'+movieID)
            .send({
                title:'Test Film 99',
                director_id:'5fff3e192428383741b7d113',
                category:'test 99',
                country:'usa',
                year:2099,
                imdb_score:1
            })
            .query({
                token:token
            })
            .end((err,res)=>{
                res.should.have.status(200);
                console.log(res.body);
                done();
            })
        })
    });
    describe('/DELETE update film by id',()=>{
        it('/deleted',done=>{
            chai.request(server)
            .delete('/api/movie/'+movieID)
            .query({
                token:token
            })
            .end((err,res)=>{
                res.should.have.status(200);
                console.log(res.body);
                done();
            })
        })
    });
});


