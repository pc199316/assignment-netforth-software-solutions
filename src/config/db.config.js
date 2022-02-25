
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/assignment").then(() => {
    console.log("successfully connected to database");
}).catch((error) => {
    console.log(error)
})