const express = require("express");
const router = express.Router();
var Grade = require("./model/grade");

router.get("/", async (req, res) => {
  res.send("hello from server");
});
router.post("/gradepost", async (req, res) => {
  const { name, email, marks } = req.body;
  if (!name || !email || !marks) {
    res.status(400).json({ error: "Please fill in all the details" });
  }
  try {
    const userExists = await Grade.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    }
    const user = new userdb({
      name,
      email,
      marks,
    });
    const signUp = await user.save();
    if (signUp) {
      res.status(201).json({ message: "Registration Successful" });
    } else {
      res.status(400).json({ error: "Registration Failed" });
    }
  } catch {}
});
module.exports = router;
