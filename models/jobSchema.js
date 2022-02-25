const mongoose = require("mongoose");
const schema = mongoose.Schema;


const jobSchema = new schema({
    job: {
        type: String,
        reuired: true
    }
})

const Jobdata = new mongoose.model('Jobdata', jobSchema)
module.exports = Jobdata;