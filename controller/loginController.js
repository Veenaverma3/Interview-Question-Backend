const  Form = require("../models/formModel")// Adjust if your model is named differently

const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Validate required fields
    if (!email || !username || !password) {
      return res.status(400).json({ message: 'Email, username, and password are required.' });
    }

    // Find user by email and username
    const user = await Form.findOne({ email, username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or username.' });
    }
 

    // Respond with success
    res.status(200).json({ message: 'Login successful!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = login;
