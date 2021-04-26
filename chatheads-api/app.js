//imports
var express= require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var router = require('./routing/index')
const Pusher = require("pusher");
const mongoose = require('mongoose')
const requestLogger = require('./utilities/requestlogger')
const errorLogger = require('./utilities/errorlogger')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))

const connection_url = 'mongodb+srv://shreyash:accesscode516@cluster0.xrsxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const pusher = new Pusher({
    appId: "1186582",
    key: "93a108f8963680657f0b",
    secret: "cfd622884b4ce6dbd0b2",
    cluster: "us2",
    useTLS: true
});
  
const chatheadsDb = mongoose.connection

chatheadsDb.on('error', console.error.bind(console, 'Connection Error:'));

chatheadsDb.once('open', ()=>{
    console.log('Chatheads db connected')
    const usersCollection = chatheadsDb.collection('users')
    const changeStream = usersCollection.watch();
    changeStream.on('change', (change) => {
        console.log(change.operationType)        
        if(change.operationType === 'update'){
        console.log(change.fullDocument)
        pusher.trigger('chatheads-messages', 'message-received',{            
            message: change.fullDocument
        })
        }
    })
    changeStream.on('error', (err) => {
        console.log(err)
    })
})

app.use(requestLogger)
app.use(router)
app.use(errorLogger)

const appPort = process.env.PORT || 3001

app.listen(appPort, () => {
    console.log('server started on port 3001')
})

