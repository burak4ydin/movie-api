const express = require('express');
const router = express.Router();
const mongo = require('mongoose');


//Model

const director = require('../Models/Director');

router.get('/',(req,res)=>{
    const promise = director.find({ });
    promise.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json(err);
    })
});

router.post('/',(req,res)=>{
    const add = new director(req.body);
    const promise = add.save();
    promise.then(data=>{
        res.json(data);
    }).catch(err =>{
        res.json(err);
    })
});

router.get('/:directorid',(req,res)=>{

    const promise = director.aggregate([
        {
            $lookup:{
                from:'movies',
                localField:'_id',
                foreignField:'director_id',
                as:'movies'
            }
        },
        {
            $match:{
                '_id':mongo.Types.ObjectId(req.params.directorid)
            }
        },
        {
            $unwind:{
                path:'$movies',
                preserveNullAndEmptyArrays:true
            }
        },
        {
            $group:{
                _id:{
                    _id:'$_id',
                    name:'$name',
                    surname:'$surname',
                    bio:'$bio'
                },
                movies:{$push:'$movies'}
            }   
        },
        
    ]);
    promise.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json(err)
    })
});

router.get('/:directorid/top10',(req,res)=>{
    const promise = director.aggregate([
        {
            $match:{
                '_id':mongo.Types.ObjectId(req.params.directorid)
            }
        },
        {
            $lookup:{
                from:'movies',
                localField:'_id',
                foreignField:'director_id',
                as:'top10'
            }
        },
        {
            $unwind:{
                path:'$top10'
            }
        },
        // {
        //     $group:{
        //         _id:{
        //             _id:'$_id',
        //             name:'$name',
        //             surname:'$surname',
        //             top10:'$top10'
        //         },
        //         top10:{
        //             $push:'$top10'
        //         }
        //     }
        // },
        {
            $project:{
                name:1,
                surname:1,
                top10:{
                    title:1,
                    imdb_score:1
                }
            }
        },
        {
            $sort:{"top10.imdb_score":-1}
        }
    ]);
    promise.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json(err);
    })

    
})
router.put('/:director_id',(req,res)=>{
    const promise = director.findByIdAndUpdate(req.params.director_id,req.body);
    promise.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json(err);
    })
});

router.delete('/:director_id',(req,res)=>{
    const promise = director.findByIdAndRemove(req.params.director_id);
    promise.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json(err);
    })
});

module.exports = router;