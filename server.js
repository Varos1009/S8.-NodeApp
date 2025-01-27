require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// Import routes
const playersRoutes = require('./routes/playersRoutes');
const eventRoutes = require('./routes/eventRoutes');
const mapRoutes = require('./routes/mapRoutes');

// Use routes
app.use('/player', playersRoutes);
app.use('/event', eventRoutes);
app.use('/map', mapRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
