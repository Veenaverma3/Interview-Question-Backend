 const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
     Ques: { type: String, required: true },
    Ans: { type: String, required: true },
    ex: {type:String}
});

module.exports = mongoose.model('Question', questionSchema);
