const Form = require("../models/formModel");

const registerForm = async (req, res) => {
  try {
    const formData = req.body;
    const { name, email, username, password } = formData;

    console.log("Received data:", { name, email, username, password });

    // Validate required fields
    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: "Name, email, username, and password are required." });
    }

    // Attempt to create a new user
    try {
      const newUser = await Form.create(formData);
      console.log("Data saved:", newUser);

      // Respond with success
      return res.status(201).json({ message: "User registered successfully", data: newUser });

    } catch (error) {
      // Handle errors specific to creating the user
      console.error("Error saving data:", error);
      return res.status(500).json({ message: "Error saving data" });
    }

  } catch (error) {
    // Handle errors that occur before or during user creation
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerForm;



// const Form = require("../models/formModel");

// const registerForm = async (req, res) => {
//   try {
//     const formData = req.body;
//     const { name, email, username, password } = formData;

//     console.log("Received data:", { name, email, username, password });

//     // Validate required fields
//     if (!name || !email || !username || !password) {
//       return res.status(400).json({ message: "Name, email, username, and password are required." });
//     }

//     // Create a new user
//     const newUser = await Form.create(formData); 
//     console.log("Data saved:", newUser);

//     // Respond with success
//     res.status(201).json({ message: "User registered successfully", data: newUser });

//   } catch (error) {
//     // Handle errors
//     console.error("Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = registerForm;

 