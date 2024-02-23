const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    // await mongoose.connect('mongodb+srv://laicheehoong:mKQpuTCVC3KvWwnj@cluster0.6dczomc.mongodb.net/YoutubeUser?retryWrites=true&w=majority&appName=Cluster0', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
