const express = require('express');
const router = express.Router();
  
let users = [
  { id: 1, name: 'Preethi', email: 'preethi@gamil.com', age: 24 },
  { id: 2, name: 'Ramya', email: 'ramyarahul@gmail.com', age: 23 }
];


// GET all users
router.get('/', (req, res) => {
  res.status(200).json(users);
});


// GET a single user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
});


// POST a new user
router.post('/', (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ message: "Name, email, and age are required" });
  }
  const newUser = {id: users.length + 1, name, email, age};
  users.push(newUser);
  res.status(201).json(newUser);
});


// PUT (update) an existing user by ID
router.put('/:id', (req, res) => {
  const { name, email, age } = req.body;
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;
  res.status(200).json(user);
});


// DELETE a user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users.splice(userIndex, 1); // Remove user from the array
  res.status(200).json({ message: "User deleted successfully" });
});


module.exports = router;
