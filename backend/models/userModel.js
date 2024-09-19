const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type: 'String',
        required: true
    },
    username : {
        type: String,
        required: true,
        min: [3, 'Username must be atleast 3 characters']
    },
    first_name: {
        type: String,
        required: true,
        min: [3, 'first name must be at least 3 characters']
    },
    last_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: [6, 'password must be at least 6 characters']
    }
}, {timestamps: true});

userSchema.statics.signup = async function(email, username, first_name, last_name, password) {
    if((!email || !password || !first_name || !last_name || !username)){
        throw Error ('Please fill in your details')
    }

    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password must have combination of uppercase, lowercase, number and a symbol')
    }

    const existingEmail = await this.findOne({email});

    if(existingEmail){
        throw Error('email already in use')
    }

    const existingUsername = await this.findOne({username});
    if(existingUsername){
        throw Error('Username already Picked')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, username, first_name, last_name, password: hash})
    return user;

}

userSchema.statics.login = async function(identifier, password){
    if(!identifier || !password){
        throw Error('Please fill in your details')
    }
    let user;
    if(validator.isEmail(identifier)){
        user = await this.findOne({email: identifier});  
    } else {
        user = await this.findOne({username: identifier})
    }
    if(!user){
        throw Error('Incorrect Email/Username or password')
    }
    
    const comparePass = await bcrypt.compare(password, user.password)
    if(!comparePass){
        throw Error("Incorrect Password")
    }
    return user;
}


module.exports = mongoose.model('User', userSchema)