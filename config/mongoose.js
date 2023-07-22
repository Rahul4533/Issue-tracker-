const mongoose = require('mongoose');
// mongoose.connect('url') 
mongoose.connect("mongodb://127.0.0.1:27017/DB", {
    useNewUrlParser: true,

    useUnifiedTopology: true,

    family: 4,
});
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
