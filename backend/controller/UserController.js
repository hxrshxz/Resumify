const model = require("../model/UserModel");
const User = model.User;

exports.getSkills = (req, res) => {
  res.status(200).json({ skills: ["JavaScript", "Node.js", "React"] });
};

exports.createUser = async (req, res) => {
  const user = new User({
    name: "Harsh",
    email: "harshmastic@gmail.com",
    interests: [
      "Web Development",
      "Machine Learning",
      "Data Science",
      "Blockchain",
    ],
    skills: ["JavaScript", "Typescript", "React", "Next.js", "Node.js", "C++"],
    experience: ["GSOC 2025", "Solana SuperTeam 5000$ Grant"],
    extras: ["Gym", "Gaming", "Coding"],
  });

  try {
    const savedUser = await user.save();
    console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await User.find()
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
