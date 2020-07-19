const validator = {}
const userIdPattern = /^[A-z0-9]+$/
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
        let error = new Error('You could not be signed in at this moment. Try again later.')
        error.status = 400
        throw error        
    }
}

validator.validateUserId = (userId) => {
    if(userIdPattern.test(userId)){
        return true
    }
    else{
        let error = new Error('The username entered is invalid. Please enter a valid username for signing up.')
        error.status = 400
        throw error
    }
}

validator.validatePassword = (password) => {
    if(passwordPattern.test(password)){
        return true
    }
    else{
        let error = new Error('The password entered is invalid. Please enter a valid password for signing up.')
        error.status = 400
        throw error
    }
}

module.exports = validator
