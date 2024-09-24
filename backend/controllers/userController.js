const User = require('../models/userModel')
// const {validationResult} = require('express-validator')

exports.signupUser = async (req, res) => {
    
    const {email, username, first_name, last_name, password} = req.body;

    try {
        const user = await User.signup(email, username, first_name, last_name, password);
        return res.status(200).json({email, user})
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


 exports.loginUser = async (req, res) => {
    
    const {identifier, password} = req.body;
    try {
        const user = await User.login(identifier, password);
        return res.status(200).json({user})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

exports.userProfile = async (req, res) => {
    try {
        const user = await User.find({});
        return res.status(200).json({user})
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}