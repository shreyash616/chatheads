const validator = {}

validator.generateToken = () => {
    return 'jbassbf3523kjbdfkjb214n'
}

const jwtToken = validator.generateToken()

validator.validateToken = (token) => {
    if(token === jwtToken){
        return true
    }
    else{
        let error = new Error('Invalid Token')
        error.status = 400
        throw error        
    }
}

validator.validateUserId = (userId) => {
    let userIdPattern = /^[A-z0-9]+$/
    if(userIdPattern.test(userId)){
        return true
    }
    else{
        let error = new Error('Invalid User Id')
        error.status = 400
        throw error
    }
}

module.exports = validator
