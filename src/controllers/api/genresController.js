const DB = require('../../database/models')

module.exports={
    list:(req,res) => {
        DB.Genre
        .findAll()
        .then(genres =>{
           
            return res.status(200).json({
                meta:{
                status:200,
                url:'api/genres',
                total: genres.length
                },
                data:{genres}
                })
             })
           },
         
          detail:(req,res)=>{
            DB.Genre
             .findByPk(req.params.id)
             .then(genre =>{
                return res.status(200).json({
                    data:{genre},
                    status:200
                })

             })
          }
        }