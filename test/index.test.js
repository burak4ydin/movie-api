const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');


chai.use(chaiHttp);



describe('Node First Test',()=>{
    it('(GET /) index ok',(done)=>{
        chai.request(server).get('/').end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    });
    it('(POST /) register ok ',(done)=>{
        chai.request(server).get('/').end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
})
