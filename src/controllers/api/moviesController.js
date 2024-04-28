const { response } = require('express')
const DB = require('../../database/models')

module.exports={
    list:(req,res)=>{
      DB.Movie
        .findAll()
        .then(movies =>{
           
            return res.status(200).json({
                meta:{
                status:200,
                url:'api/movies',
                total: movies.length
                },
                data:{movies}
                })
             })
    },

    store:(req,res) => {
    //  return res.json(req.body)
       //console.log('esto es req body:', req.body)
      
        DB.Movie
         .create(req.body)
         .then(movie =>{
           
            return res.status(200).json({
              data: movie,
              url: "api/movies",
              status: 200,
              created: 'ok'
              })
             })
           },
         
          delete:(req,res)=>{
            DB.Movie
             .destroy({
              where:{
                id: req.params.id
              }
          })
             .then(response =>{
               return res.status(200).json(response)
            
              })
        }
      }