const { loginController } = require("../controllers/auth");
const { signupController } = require("../controllers/auth");
const log = require("../middlewares/Logger");

const router = require("express").Router();

router.post("/login", loginController);

router.post("/signup", log, signupController);
//log middleware is only intented to signup

module.exports = router;
