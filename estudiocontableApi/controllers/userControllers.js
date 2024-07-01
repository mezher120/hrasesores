const User = require('../models/User.js');

const getUser = async (req, res) => {
    console.log('entre')
    const {user, password, state} = req.body;

    try {
        const userFound = await User.findOne({user, password, state});
        console.log(userFound)
        if (userFound) {
            res.status(200).json({message: 'user found', userFound})
            console.log('user found')
        } else {
            res.status(400).json({message: 'user not found', userFound})
            console.log('user not found')
        }
    } catch (error) {
        res.send(error)
    }
}

const postUser = async (req, res) => {
    const {user, password, state} = req.body;
    
    try {
        const newUser = new User({user, password, state})
        await newUser.save();
        res.status(200).json({message: 'usuario creado', user: newUser});
    } catch (error) {
        res.status(500).json({message: 'error', error})
    }
}

module.exports = {getUser, postUser};
