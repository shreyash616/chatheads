const express = require('express')
const router = express.Router()
const chatheadsService = require('../service/index')

router.post('/signUp',(req,res,next)=>{      
    chatheadsService.signUp(req.body).then((response)=>{
        res.send({
            confirmation: response,
            status: 200
        })
    }).catch((err)=>{        
        next(err)
    })
})

module.exports = router