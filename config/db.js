const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const ConnectDB = async () =>{
    
    try {
       await mongoose.connect(
            db, 
            {
            useNewUrlParser: true, 
            useUnifiedTopology: true
            }
        );
        console.log("MongoDB is COnnected");
    } catch (error) {
        console.log("Error Ocurred on Database Connection : "+error);
        process.exit(1);
    }
}


module.exports = ConnectDB;