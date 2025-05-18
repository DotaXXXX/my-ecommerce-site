const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const userFile = path.join(__dirname, '../data/user.json');

router.post('/', (req, res) => {
  const {fname, lname, category, occupation, email, password} = req.body;
  if (!fname || !lname || !category || !occupation || !email || !password) {
    return res.status(400).json({message: "All fields are required."});
  }
  let users = [];
  if (fs.existsSync(userFile)) {
    users = JSON.parse(fs.readFileSync(userFile));
  }
  if (users.find(u => u.email === email)) {
    return res.json({message: "This email has already been used."});
  }
  users.push({fname, lname, category, occupation, email, password});
  fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
  res.json({message: "Register successfully"});
});
module.exports = router;
