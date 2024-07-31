// routes/announcements.js
const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcement');

// POST /api/announcements
router.post('/', (req, res) => {
  const { subject, date, description } = req.body;

  if (!subject || !date || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newAnnouncement = new Announcement({ subject, date, description });

  newAnnouncement.save()
    .then(announcement => res.status(201).json(announcement))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

// routes/assignments.js
const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignment');

// POST /api/assignments
router.post('/', (req, res) => {
  const { subject, date, description } = req.body;

  if (!subject || !date || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newAssignment = new Assignment({ subject, date, description });

  newAssignment.save()
    .then(assignment => res.status(201).json(assignment))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
