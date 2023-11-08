//Controller for auth.js

const users = require("../models/User");

const signupController = async (req, res) => {
  console.log("signupController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("email and password required");
    return;
  }

  //check if the user email is already present or not

  //Gentare a random ID
  const id = Math.floor(Math.random() * 1000);

  res.send("signupController");

  // Simulate user registration
  users.push({
    id,
    email,
    password,
  });

  res.status(200).json({
    id,
  });
};

const loginController = async (req, res) => {
  console.log("loginController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("email and password required");
    return;
  }

  const user = users.find((item) => item.email === email);
  if (!user) {
    res.status(404).send("user not found");
  }

  if (user.password !== password) {
    res.status(401).send("Incorrect Password");
    return;
  }

  // Define 'id' based on the 'user' object
  const id = user.id;

  res.status(200).json({
    id,
  });
};

module.exports = {
  signupController,
  loginController,
};
