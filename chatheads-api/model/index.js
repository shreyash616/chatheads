const connection = require('../utilities/connection')
const chatheadsModel = {}

chatheadsModel.signUp = (signUpDetails) => {
    return connection.getUserModel().then((userDb)=>{
        signUpDetails.userType='Ordinary'
        signUpDetails.chats = []
        return userDb.insertMany([signUpDetails]).then((confirmation)=>{
            if(confirmation){
                let confirmedDetails = {...signUpDetails}
                return {
                    data: confirmedDetails
                }
            }
        })
    }).catch((error)=>{
        console.log(error)
        throw error
    })
}

chatheadsModel.signIn = (signInDetailsData) => {
    return connection.getUserModel().then((userDb)=>{
        return userDb.findOne({userId: signInDetailsData.userId}).then((userIdFound)=>{
            if(userIdFound){
                return userDb.findOne({password: signInDetailsData.password}).then((passwordFound)=>{
                    if(passwordFound){
                        return {
                            data: {
                                message: 'Sign in successful.'
                            }                                                      
                        }
                    }else{
                        let passwordNotFoundError = new Error('The password you have entered is incorrect. Try again or reset your password.')
                        passwordNotFoundError.status= 404
                        throw passwordNotFoundError
                    }
                })
            }
            else{
                let userIdNotFoundError = new Error('We couldn\'t find this userId. Please sign up.')
                userIdNotFoundError.status = 404
                throw userIdNotFoundError
            }
        })        
    }).catch((err)=>{
        throw err
    })
}

module.exports = chatheadsModel