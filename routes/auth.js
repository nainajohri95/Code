const { loginController } = require("../controllers/auth");
const { signupController } = require("../controllers/auth");

const router = require("express").Router();

router.post("/login", loginController);

router.post("/signup", signupController);

module.exports = router;
