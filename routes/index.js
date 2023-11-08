const router = require("express").Router();
const postRouter = require("./post");
const authRouter = require("./auth");

router.use("/post", postRouter); //now we can use middlewares (Routers are also middlewares)
//When endpoint is post then postRouter will execute.

router.use("/auth", authRouter);

module.exports = router;
