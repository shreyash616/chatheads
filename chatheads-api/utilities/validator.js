const validator = {}
const userIdPattern = /^[a-z0-9]+$/
const passwordPattern = /^[A-Z]{1}[A-z0-9]+$/

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
    if(userIdPattern.test(userId)){
        return true
    }
    else{
        let error = new Error('Invalid User Id')
        error.status = 400
        throw error
    }
}

validator.validatePassword = (password) => {
    if(passwordPattern.test(password)){
        return true
    }
    else{
        let error = new Error('Invalid password')
        error.status = 400
        throw error
    }
}

module.exports = validator
