const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({message:"User created", user});
  }catch(err){
    res.status(500).send({message: "error saving user", err});
  }    
});

module.exports = router;