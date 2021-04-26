const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true, 
        unique: true
    },
    name: {
        type: String, 
        required: true
    },
    phoneNumber: {
        type: Number, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    userType : {
        type: String,
        required: true
    },
    chats: {
        type: Array
    }
})

module.exports = mongoose.model('User', userSchema)
