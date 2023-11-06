const dotenv = require("dotenv"); //importing .env file
dotenv.config({ path: "./.env" }); //this line will put all the data of .env file to the process

const express = require("express");
const app = express();

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
