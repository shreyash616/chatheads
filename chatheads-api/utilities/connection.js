const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

var userSchema = new Schema({
    userId: {
        type: String, 
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

let connection = {}
connection.getUserModel = () => {
    return mongoose.connect("mongodb://localhost:27017/Chatheads", { useNewUrlParser: true }).then((db) => {
        return db.model('User', userSchema)
    }).catch((err) => {
        console.log(err.message);
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}

module.exports = connection
