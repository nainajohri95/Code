const dotenv = require("dotenv"); //importing .env file
dotenv.config({ path: "./.env" }); //this line will put all the data of .env file to the process
const express = require("express");
const mainRouter = require("./routes/index");

const app = express();
app.use(express.json());
// function middleware1(req, res, next) {} //careting a middleware fun

app.use((req, res, next) => {
  //This is global middleware
  //creating middleware fun inside this
  console.log(req.method, req.url, new Date().toTimeString());
  next();

  // if (req.body && req.body.name === "Naina") {
  //   next();
  // } else {
  //   res, send("Not allowed");
  // }
});
app.use("/api", mainRouter);

// app.use(middleware1) //using the middleware fun here

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

app.get("/getRandomNum", (req, res) => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  res.json({ randomNum });
});

const PORT = process.env.PORT;
console.log(process.env.SECRET_API_KEY);

app.listen(PORT, () => {
  console.log("started on listnening on port:", PORT);
});
