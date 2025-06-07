// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//OAuth
const session = require('express-session');
const passport = require('passport');
require('./passport');

const characterRoutes = require('./routes/characters');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

const allowedOrigins = [
  'http://localhost:3000',
  'https://characters-352f.onrender.com'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

//API route
app.use('/api/characters', characterRoutes);

// Swagger Documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// MongoDB connection and server start
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => console.log('MongoDB connection error:', err));
