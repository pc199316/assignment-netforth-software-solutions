
const mongoose = require("mongoose");
const validator = require("validator");
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        reuired: true
    },
    fathername: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email ID")
            }
        }
    },
    jobassigned: {
        type: String,
        reuired: true
    }
})


const Userdata = new mongoose.model('Userdata', userSchema)
module.exports = Userdata;