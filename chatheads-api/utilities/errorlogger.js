//custom errorlogger
var errorLogger = (err,req,res,next) => {
    console.log(err.message)
    res.status(err.status).send(err.message)
}

module.exports = errorLogger
