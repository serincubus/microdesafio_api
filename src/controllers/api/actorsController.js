const { response } = require('express')
const DB = require('../../database/models')

module.exports={
    list:(req,res)=>{
      DB.Actor
        .findAll()
        .then(actors =>{
           
            return res.status(200).json({
                meta:{
                status:200,
                url:'api/actors',
                total: actors.length
                },
                data:{actors}
                })
             })
    },

    store:(req,res) => {
    //  return res.json(req.body)
       //console.log('esto es req body:', req.body)
      
        DB.Actor
       
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
            DB.Actor
             .destroy({
                
              where:{
                id: req.params.id},
                force:true
                        })
             .then(response =>{
               return res.status(200).json(response)
            
              })
        }
      }