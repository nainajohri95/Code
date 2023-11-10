const {
  loginController,
  getUserController,
  signupController,
} = require("../controllers/auth");
// We can replace above line like this
//const AuthController = require("../controllers/auth");
//Ag=fter that we can write post and get requests like this
// router.post("/login", AuthController.loginController);
//router.post("/signup",  AuthController.signupController);
//router.get("/user/:id", AuthController.getUserController);
const log = require("../middlewares/Logger");

const router = require("express").Router();

router.post("/login", loginController);

router.post("/signup", log, signupController);
//log middleware is only intented to signup

router.get("/user/:id", getUserController);
//here id is params(parameter)

module.exports = router;
