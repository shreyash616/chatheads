const connection = require('../utilities/connection')
const chatheadsModel = {}

chatheadsModel.signUp = (signUpDetails) => {
    return connection.getUserModel().then((userDb)=>{
        signUpDetails.userType='Ordinary'
        signUpDetails.chats = []
        return userDb.insertMany([signUpDetails]).then((confirmation)=>{
            if(confirmation){
                let confirmedDetails = {...signUpDetails}
                return confirmedDetails
            }
        })
    }).catch((error)=>{
        console.log(error)
        throw error
    })
}

chatheadsModel.signIn = (signInDetails) => {

}

module.exports = chatheadsModel