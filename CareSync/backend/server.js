const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/CareSync", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//model for user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  practiceName: String,
});

const User = mongoose.model("User", userSchema);

//signup route
app.post("/signup", async (req, res) => {
  const { name, email, password, practiceName } = req.body;
  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      practiceName,
    });
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//login route

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login attempt:", email, password);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User found. Hashed password:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(401).json({ error: "Invalid password" });
    }

    console.log("Login successful");
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Run server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
