// backend/models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: Number, required: true },
  attendance: Number,
  marks: Number,
});

module.exports = mongoose.model('Student', studentSchema);
