//custom errorlogger
var errorLogger = (err,req,res,next) => {
    console.log(err.message)
    res.status(err.statusCode).send(err.message)
}

module.exports = errorLogger
