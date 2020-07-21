const connection = require('../utilities/connection')
const e = require('express')
const chatheadsModel = {}

chatheadsModel.signUp = (signUpDetails) => {
    return connection.getUserModel().then((userDb)=>{
        signUpDetails.userType='Ordinary'
        signUpDetails.chats = []
        return userDb.findOne({userId: signUpDetails.userId}).then((usernameFound)=>{
            if(!usernameFound){
                return userDb.insertMany([signUpDetails]).then((confirmation)=>{
                    if(confirmation){                        
                        return {
                            data: {
                                message: 'Sign up successful.'
                            }
                        }
                    }
                })
            }
            else{
                let userIdAlreadyFoundError = new Error('You\'ve already signed up. Please sign in.')
                userIdAlreadyFoundError.status = 400
                throw userIdAlreadyFoundError
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
                let userIdNotFoundError = new Error('We couldn\'t find this username. Please sign up.')
                userIdNotFoundError.status = 404
                throw userIdNotFoundError
            }
        })        
    }).catch((err)=>{
        throw err
    })
}

chatheadsModel.updateUserId = (userIdDetails) => {
    return connection.getUserModel().then((userDb)=>{
        return userDb.findOne({userId: userIdDetails.newUserId}).then((userIdAlreadyFound)=>{
            if(userIdAlreadyFound){
                let userIdAlreadyFoundError = new Error('We already have this username registered with us. Please try another one.')
                userIdAlreadyFoundError.status = 400
                throw userIdAlreadyFoundError
            }
            else{
                return userDb.updateOne({userId: userIdDetails.userId},{$set : {userId: userIdDetails.newUserId}}).then((confirmation)=>{
                    if(confirmation.nModified > 0){
                        return {data : {
                            message: 'Username successfully updated'
                        }}
                    }
                    else{
                        let updateFailure = new Error('Failed to update username');
                        updateFailure.status = 500;
                        throw updateFailure
                    }
                })
            }
        })        
    }).catch((err)=>{
        throw err
    })
}

module.exports = chatheadsModel