const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/UserRoutes"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
exports.createUser = async (req, res) => {
  const user = new User();
  user.name = "harsh";
  user.email = "harshmastic@gmail.com";
  user.skills = ["javascript", "typescript", "react"];
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
    console.log(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};