const express = require('express');
const router = express.Router();


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

router.get('/:director_id',(req,res)=>{
    const promise = director.aggregate([
        {
            $lookup:{
                from:'movies',
                localField:'_id',
                foreignField:'director_id',
                as:'movies'
            }
            
        }
    ])

    promise.then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json(err);
    })
});

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