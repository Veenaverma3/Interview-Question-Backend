const mongoose = require("mongoose");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
    try {
         const { userName, mobileNumber, password, email } = req.body;
        console.log("data",userName)

          if (!userName || !mobileNumber || !password ) {
            return res.status(400).json({ message: "User Name, Mobile Number, and Password are mandatory." });
        }

         const userAvailable = await User.findOne({ mobileNumber });
        if (userAvailable) {
            return res.status(400).json({ message: "User already exists with this mobile number." });
        }

         const user = await User.create({ userName, mobileNumber, password, email });

        // Respond with the created user details
        return res.status(201).json({ _id: user._id, mobileNumber: user.mobileNumber });
    } catch (error) {
         console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { registerUser };
