const express = require("express");
const router = express.Router();
var grades = require("./model/grade");

router.get("/", async (req, res) => {
  res.send("hello from server");
});

router.post("/gradepost", async (req, res) => {
  // const { name, email, marks } = req.body;
  // if (!name || !email || !marks) {
  //   res.status(400).json({ error: "Please fill in all the details" });
  // }
  // try {
  //   const userExists = await grades.findOne({ email });
  //   if (userExists) {
  //     res.status(400).json({ error: "User already exists" });
  //   }
  //   const student = new grades({
  //     name,
  //     email,
  //     marks,
  //   });
  //   const StudGrade = await student.save();
  //   if (StudGrade) {
  //     res.status(201).json({ message: "Grade post Successful" });
  //   } else {
  //     res.status(400).json({ error: "Not Successful" });
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
  console.log(req.body);
  res.json({ message: req.body });
});
module.exports = router;