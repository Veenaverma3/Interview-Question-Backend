const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require("./config/dbConnection");
 const {fetchQues} = require("./controller/quesController")
const registerForm = require("./controller/formController")
const login = require("./controller/loginController");
const setallQuestion = require("./controller/addController")
   const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); 
 connectDb();
 
 app.use(cors());

 app.post("/", registerForm); // for signup
  app.get("/data",fetchQues); // for questin fetch
  app.post("/login",login); // for login user
 app.post("/add",setallQuestion);

 



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










// const express = require("express");
// const dotenv = require("dotenv");
// // const cors = require("cors");
// const connectDB = require("./config/dbConnection");
// const { registerUser } = require("./controller/userController"); // Destructure if necessary

//  dotenv.config();

// const app = express();
// // app.use=(cors());

//  connectDB();

//  app.use(express.json());

// //  app.post('/register', registerUser); // Changed route to /register for clarity
// app.post("/",)
//  const PORT = process.env.PORT || 4000;

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
