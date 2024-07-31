// models/assignment.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
