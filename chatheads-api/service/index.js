const chatheadsModel = require('../model/index')
const validator = require('../utilities/validator')
const chatheadsService = {}

chatheadsService.signUp = (signUpDetails) => {
    if(validator.validateToken(signUpDetails.jwtToken)){
        if(validator.validateUserId(signUpDetails.data.userId)){
            if(validator.validatePassword(signUpDetails.data.password)){
                return chatheadsModel.signUp(signUpDetails.data).then((response)=>{                
                    return response
                }).catch((err)=>{                
                    if(err.message){
                        throw err;
                    }
                    else{
                        let error = new Error("Couldn't connect to database");
                        error.status = 400;
                        throw error;
                    }
                })
            }
        }
    }    
}

chatheadsService.updateUserId = (userIdDetails) => {
    if(validator.validateToken(userIdDetails.jwtToken)){
        if(validator.validateUserId(userIdDetails.data.newUserId)){
            return chatheadsModel.updateUserId(userIdDetails.data).then((response)=>{                
                return response
            }).catch((err)=>{                
                if(err.message){
                    throw err;
                }
                else{
                    let error = new Error("Couldn't connect to database");
                    error.status = 400;
                    throw error;
                }
            })                
            }
        }
    }    


chatheadsService.signIn = (signInDetails) => {
    if(validator.validateToken(signInDetails.jwtToken)){
        return chatheadsModel.signIn(signInDetails.data).then((response)=>{                
            return response
        }).catch((err)=>{                
            if(err.message){
                throw err;
            }
            else{
                let error = new Error("Couldn't connect to database");
                error.status = 400;
                throw error;
            }
        })
    }    
}

module.exports = chatheadsService