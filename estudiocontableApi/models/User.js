const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    user: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Compilar el esquema en un modelo y exportarlo
const User = mongoose.model('User', userSchema); // nombre de la coleccion "User"

module.exports = User;