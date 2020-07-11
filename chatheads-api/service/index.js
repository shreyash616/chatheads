const chatheadsModel = require('../model/index')
const validator = require('../utilities/validator')
const chatheadsService = {}

chatheadsService.signUp = (signUpDetails) => {
    if(validator.validateToken(signUpDetails.jwtToken)){
        if(validator.validateUserId(signUpDetails.data.userId)){
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

module.exports = chatheadsService