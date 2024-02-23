const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

require('dotenv').config();


// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI);


app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Server started on port 3000'));
