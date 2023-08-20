const User4 = require('../Model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res)=>{
    try {
        const userExist = await User4.findOne({email: req.body.email})
        if(userExist) return res.status(400).json({errors: true, message: "User already exists"})

        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt. hash(req.body.password, salt)

        const data = await User4.create(req.body)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

// Login
exports.login = async(req, res)=>{
    try {
        const userExist = await User4.findOne({email: req.body.email})
        if(!userExist) return res.status(400).json({errors: true, message: "email or password invalid"})

        const validPassword = await bcrypt.compare(req.body.password, userExist.password)
        if(!validPassword) return res.status(400).json({errors: true, message: "email or password invalid"})

        const token = await jwt.sign({id: userExist._id},process.env.SEC);
        return res.json({errors: false, data: {token: token, user: userExist}})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}