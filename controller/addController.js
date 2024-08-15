const Question = require("../models/quesModel");

const setallQuestion = async (req, res) => {
    const { Ques, Ans, ex } = req.body;
    console.log("Data received:", req.body);

    if (!Ques || !Ans || !ex) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Use .create() method which returns a promise
        const result = await Question.create({ Ques, Ans, ex });
        console.log("New Question is Added:", result);
        return res.status(201).json({ message: "Question added successfully" });
    } catch (error) {
        console.error("Error creating question:", error);
        return res.status(500).json({ message: "An error occurred while creating the question" });
    }
};

module.exports = setallQuestion;
