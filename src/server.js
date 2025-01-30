import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.end();
};


app.get("/", logger, handleHome);

app.listen(PORT, handleListening);

function handleListening() {
  console.log(`Server is running on port ${PORT}`);
}
