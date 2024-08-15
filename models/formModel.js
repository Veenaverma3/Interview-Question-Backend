const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Form", formSchema);
