const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const userFile = path.join(__dirname, '../data/user.json');

router.post('/', (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json({message: "All fields are required."});
  }
  let users = [];
  if (fs.existsSync(userFile)) {
    users = JSON.parse(fs.readFileSync(userFile));
  }
  const user = users.find(u => u.email === email);
  if (!user) return res.json({message: "Incorrected Username"});
  if (user.password !== password) return res.json({message: "Incorrected Password."});
  res.json({message: "Login successfully."});
});
module.exports = router;
