// create Schema
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true,"Plz add the user"]
    },

    email: {
        type: String,
        required:false,
        lowercase:true
    },

    mobileNumber: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true,"Enter password"]
    },
    passwordConfirm: {
        type: String,
        required: false
    },
})
module.exports= mongoose.model("User", userSchema);

