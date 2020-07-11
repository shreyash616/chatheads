//custom errorlogger
var errorLogger = (err,req,res,next) => {
    console.log(err.message)
    res.send({
        message: err.message,
        status: err.status
    })
}

module.exports = errorLogger
