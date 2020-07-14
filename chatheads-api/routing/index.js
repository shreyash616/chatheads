const express = require('express')
const router = express.Router()
const chatheadsService = require('../service/index')

router.post('/signUp',(req,res,next)=>{      
    chatheadsService.signUp(req.body).then((response)=>{
        res.send({...response, status: 200})
    }).catch((err)=>{        
        next(err)
    })
})


router.post('/signIn',(req,res,next)=>{      
    chatheadsService.signIn(req.body).then((response)=>{
        res.send({...response, status: 200})
    }).catch((err)=>{        
        next(err)
    })
})

router.post('/updateUsername',(req,res,next)=>{      
    chatheadsService.updateUserId(req.body).then((response)=>{
        res.send({...response, status: 200})
    }).catch((err)=>{        
        next(err)
    })
})

module.exports = router