import express from "express";

const PORT = 4000;
const app = express();


const handleHome = (req, res) => {
  return res.send("hello");
};

const handleLogin = (req, res) => {
  return res.send("login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);


app.listen(PORT, handleListening);

function handleListening() {
  console.log("Server is running on port 4000");
}
