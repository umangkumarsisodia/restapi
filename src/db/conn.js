const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/employees-api")
.then(()=>{
    console.log("connection successfull");
})
.catch((e)=>{
    console.log(e);
})