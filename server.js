const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

require('dotenv').config();


// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb+srv://laicheehoong:mKQpuTCVC3KvWwnj@cluster0.6dczomc.mongodb.net/YoutubeUser?retryWrites=true&w=majority&appName=Cluster0');


app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // You can restrict this to specific domains for security
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


// Routes
app.use('/users', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
