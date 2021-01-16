var express = require('express');
var router = express.Router();

//Models
const Movie = require('../Models/Movie');

router.post('/', function(req, res, next) {
  const add = new Movie(req.body);
  const promise = add.save();
  promise.then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

//between
router.get('/between/:start/:end',(req,res)=>{
  const{start,end}= req.params;
  const promise = Movie.find(
    {
      year :{"$gte":parseInt(start),"$lte":parseInt(end)}
    }
    );
    promise.then(data=>{
      res.json(data);
    }).catch(err=>{
      res.json(err);
    })
})

router.get('/',(req,res)=>{
  const promise = Movie.find({ });
  promise.then(data=>{
    res.json(data);
  });
  promise.catch(data=>{
    res.json(data);
  });
});
router.get('/top10',(req,res)=>{
  const promise = Movie.find({}).sort({imdb_score:-1});
  promise.then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

router.get('/:movie_id',(req,res)=>{
  const promise=Movie.aggregate([
    {
      $lookup:{
        from:'directors',
        localField:'director_id',
        foreignField:'_id',
        as:'director'
      }
      // $unwind:{
      //   path:'$director',
      //   preserveNullAndEmptyArrays:true
      // }
    }
  ])

  promise.then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

router.put('/:movie_id',(req,res)=>{
  const promise = Movie.findByIdAndUpdate(req.params.movie_id,req.body);
  promise.then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});
router.delete('/:movie_id',(req,res)=>{
  const promise = Movie.findByIdAndRemove(req.params.movie_id);
  promise.then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

module.exports = router;
