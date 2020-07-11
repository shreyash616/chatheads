const express = require('express')
const router = express.Router()
const chatheadsService = require('../service/index')
const { response } = require('express')

router.post('/signUp',(req,res,next)=>{
    chatheadsService.signUp(req.body).then((response)=>{
        res.send({
            confirmation: response
        })
    }).catch((err)=>{
        next(err)
    })
})

module.exports = router