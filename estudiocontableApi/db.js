const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.URL}/hrasesores`)
        console.log('DB conectada')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;