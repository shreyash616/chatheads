const express = require('express')
const router = express.Router()
const chatheadsService = require('../service/index')

router.get('/', (req, res, next) => {
    res.status(200).send('<h1>Welcome to chatheads-ws<h1/>')
})

router.post('/getJwtToken', (req,res,next) => {
    chatheadsService.getJwtToken(req.body.authHeader).then((resp)=>{
        let response = {
            data: {
                jwtToken: resp
            }, 
            status: 200
        }
        res.send(response)
    }).catch((err)=>{
        next(err)
    })
})

router.post('/signUp',(req,res,next)=>{      
    chatheadsService.signUp(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({...response, status: 200})
        },2000)
    }).catch((err)=>{        
        next(err)
    })
})


router.post('/signIn',(req,res,next)=>{      
    console.log(req.body)
    chatheadsService.signIn(req.body).then((response)=>{
        setTimeout(()=>{
            console.log(response)
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

router.post('/searchChatheads',(req,res,next)=>{
    chatheadsService.searchChatheads(req.body).then((response)=>{
        res.send({...response, status: 200})
    }).catch((err)=>{
        next(err)
    })
})

router.post('/sendMessage',(req,res,next)=>{
    chatheadsService.sendMessage(req.body).then((response)=>{
        res.send({...response,status:200})
    }).catch((err)=>{
        next(err)
    })
})

router.post('/getMessages', (req,res,next)=>{
    chatheadsService.getMessages(req.body).then((response)=>{
        res.send({...response,status:200})
    }).catch((err)=>{
        next(err)
    })
})

module.exports = router