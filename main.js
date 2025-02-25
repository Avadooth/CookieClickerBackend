// Here are the project parameters
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { calculateScore } from './Jobs/calculateScore.js';
import {  fetchUserData } from './Jobs/fetchUserData.js';

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cookieClicker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get User Data
app.get('/api/user', (req, res) => {
  fetchUserData()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Handle Click Event
app.post('/api/click', (req, res) => {  
  calculateScore()
    .then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));
