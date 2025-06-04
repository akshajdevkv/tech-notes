const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
            tlsAllowInvalidCertificates: false,
            retryWrites: true
        })
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB