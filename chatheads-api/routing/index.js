const express = require('express')
const router = express.Router()
const chatheadsService = require('../service/index')

router.post('/getJwtToken', (req,res,next) => {
    chatheadsService.getJwtToken(req.body.authHeader).then((resp)=>{
        let response = {
            data: {
                jwtToken: resp
            }, 
            status: 200
        }
        setTimeout(()=>{
            res.send(response)
        },2000)
    }).catch((err)=>{
        next(err)
    })
})

router.post('/signUp',(req,res,next)=>{      
    chatheadsService.signUp(req.body).then((response)=>{
        res.send({...response, status: 200})
    }).catch((err)=>{        
        next(err)
    })
})


router.post('/signIn',(req,res,next)=>{      
    chatheadsService.signIn(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({...response, status: 200})
        },2000)
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