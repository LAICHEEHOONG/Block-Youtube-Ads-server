const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  tableData: {
    type: String,
    required: true
  },
  updateDate: {
    type: Date,
    required: true
  },

});

module.exports = mongoose.model('Table', TableSchema);
