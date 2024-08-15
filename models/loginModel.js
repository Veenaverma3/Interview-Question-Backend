const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
       type: String,
        required: true,
        unique: true
    },
   
    password: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Form", LoginSchema);
