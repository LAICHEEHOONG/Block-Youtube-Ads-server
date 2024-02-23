const mongoose = require('mongoose');

const YoutubeUserSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true
  },
  accountId: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true
  },
  unlimited: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('YoutubeUser', YoutubeUserSchema);
