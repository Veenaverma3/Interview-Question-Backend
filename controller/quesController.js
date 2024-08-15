const Question = require('../models/quesModel');

// Controller function to handle fetching questions
// const getQuestions = async (req, res) => {
//     try {
//         const newQuestion = req.body;
//         console.log("first" ,newQuestion)

//          const questions = await Question.find();
//          res.json(questions);

//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

const fetchQues = async (req,res) => {
    const Quest = await Question.find();
    console.log("que in database sucessful");
    res.status(200).json({Quest});
}
 module.exports = { fetchQues };


