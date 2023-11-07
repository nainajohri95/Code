const router = require("express").Router();

router.post("/login", (req, res) => {
  res.send("this is for login");
});

module.exports = router;
