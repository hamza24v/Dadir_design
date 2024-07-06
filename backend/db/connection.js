const mongoose = require('mongoose')

async function connectDB(){
    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("new mongodb connection established")
        } else {
            console.log("already established mongoDB connection")
        }
    } catch(error) {
        console.log(error)
    }
    return mongoose;
}

module.exports = connectDB