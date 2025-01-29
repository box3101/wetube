import express from "express";

const PORT = 4000;
const app = express();

app.listen(PORT, handleListening);

function handleListening() {
  console.log("Server is running on port 4000");
}
