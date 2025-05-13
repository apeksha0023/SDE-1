const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

const users = []; // In-memory user store (mock)

exports.signUp = (req, res) => {
  const { email, password } = req.body;

  console.log('Received signup data:', req.body);

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);

  const token = generateToken(newUser.id);
  return res.status(201).json({ token, message: 'User registered successfully.' });
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;

  console.log('Received login data:', req.body);

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const token = generateToken(user.id);
  return res.status(200).json({ token, message: 'Login successful.' });
};
