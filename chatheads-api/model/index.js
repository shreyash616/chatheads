const connection = require('../utilities/connection')
const chatheadsModel = {}

chatheadsModel.signUp = (signUpDetails) => {
    return connection.getUserModel().then((userDb)=>{
        signUpDetails.type='Ordinary'
        signUpDetails.chats = []
        return userDb.insertMany([signUpDetails]).then((confirmation)=>{
            if(confirmation){
                let confirmedDetails = {...signUpDetails}
                return confirmedDetails
            }
        })
    }).catch((error)=>{
        throw error;
    })
}

chatheadsModel.signIn = (id, password) => {

}

module.exports = chatheadsModel