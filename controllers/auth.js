//Controller for auth.js

const signupController = async (req, res) => {
  console.log("signupController called");
  res.send("signupController");
};

const loginController = async (req, res) => {
  console.log("loginController called");
  res.send("loginController");
};

module.exports = {
  signupController,
  loginController,
};
