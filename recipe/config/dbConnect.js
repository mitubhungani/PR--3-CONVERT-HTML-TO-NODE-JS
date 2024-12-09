const mongoose = require('mongoose')

const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/ejs')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('error connecting to MongoDB');
    }
}

module.exports = dbConnect