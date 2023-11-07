const dotenv = require("dotenv"); //importing .env file
dotenv.config({ path: "./.env" }); //this line will put all the data of .env file to the process
const postRouter = require("./routes/post");
const authRouter = require("./routes/auth");

const express = require("express");
const app = express();

app.use("/post", postRouter); //now we can use middlewares (Routers are also middlewares)
//When endpoint is post then postRouter will execute.

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

const PORT = process.env.PORT;
console.log(process.env.SECRET_API_KEY);

app.listen(PORT, () => {
  console.log("started on listnening on port:", PORT);
});
