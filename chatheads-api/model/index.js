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
                                message: 'Sign in successful.',
                                userData: passwordFound
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

chatheadsModel.searchChatheads = (searchText) => {
    return connection.getUserModel().then((userDb)=>{
        console.log(searchText)
        let searchRegex = new RegExp(searchText)
        return userDb.find({$or: [{userId: {$regex: searchRegex, $options: 'i'}, name: {$regex: searchRegex, $options: 'i'}}]},{_id: 0, name:1, userId: 1}).then((searchResult)=>{
            if(searchResult.length > 0){
                return {
                    data: searchResult,
                }
            }
            else{
                let noResultError = new Error('No chathead found');
                noResultError.status = 404;
                throw noResultError
            }
        }).catch((err)=>{
            throw err
        })
    })
}



chatheadsModel.sendMessage = (messageDetails) => {
    return connection.getUserModel().then((userDb)=>{
        console.log(messageDetails)
        return userDb.findOne({userId: messageDetails.senderUserId},{chats:1,_id:0}).then((senderDetailsFound)=>{
            console.log(senderDetailsFound)
            if(senderDetailsFound){
                let chats = [...senderDetailsFound.chats]
                let receiverFoundFlag = false
                for(let i=0;i<chats.length;i++){
                    if(chats[i].userId === messageDetails.receiverUserId){
                        let messageObj = {
                            time: new Date(),
                            message: messageDetails.message,
                            userId: messageDetails.senderUserId
                        }
                        chats[i].messages.push(messageObj)
                        chats[i].updateTime = new Date()
                        receiverFoundFlag = true
                        break
                    }                    
                }
                if(!receiverFoundFlag){
                    let messageObj = {
                        time: new Date(),
                        message: messageDetails.message,
                        userId: messageDetails.senderUserId
                    }
                    chats.push({
                        userId: messageDetails.receiverUserId,
                        messages: [{...messageObj}],
                        updateTime: new Date()
                    })
                }
                return userDb.updateOne({userId: messageDetails.senderUserId}, {$set: {chats: chats}}).then((conf)=>{
                    if(conf.nModified > 0){
                        return userDb.findOne({userId: messageDetails.receiverUserId},{chats:1,_id:0}).then((receiverDetailsFound)=>{
                            if(receiverDetailsFound){
                                let senderFoundFlag = false
                                let text = [...receiverDetailsFound.chats]
                                for(let i=0;i<text.length;i++){
                                    if(text[i].userId === messageDetails.senderUserId){
                                        let messageObject = {
                                            time: new Date(),
                                            message: messageDetails.message,
                                            userId: messageDetails.senderUserId
                                        }
                                        text[i].messages.push(messageObject)
                                        text[i].updateTime = new Date()
                                        senderFoundFlag = true
                                        break
                                    }
                                }
                                if(!senderFoundFlag){
                                    let messageObject = {
                                        time: new Date(),
                                        message: messageDetails.message,
                                        userId: messageDetails.senderUserId
                                    }
                                    text.push({
                                        userId: messageDetails.senderUserId,
                                        messages: [{...messageObject}],
                                        updateTime: new Date()
                                    })
                                }
                                return userDb.updateOne({userId: messageDetails.receiverUserId}, {$set: {chats: text}}).then((conf)=>{
                                    if(conf.nModified > 0){
                                        return connection.getUserModel().then((updatedUserDb)=>{
                                            return updatedUserDb.findOne({userId: messageDetails.senderUserId},{chats:1,_id:0}).then((updatedChats)=>{
                                                return {data: updatedChats}
                                            })
                                        })
                                    } 
                                    else{
                                        let cantSendMessageError = new Error('Couldn\'t send the message.');
                                        noResultError.status = 400;
                                        throw cantSendMessageError
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
   
    }).catch((err)=>{
        throw err
})
}
                        

module.exports = chatheadsModel