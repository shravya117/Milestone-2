const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


// Import models
const Student = require('./models/student');
const Announcement = require('./models/announcement');
const Assignment = require('./models/assignment');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://saidevmakanur2004:saidev2007@saidev.rsigyav.mongodb.net/Students', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Student routes
app.post('/api/students', (req, res) => {
  const students = req.body;

  if (!Array.isArray(students)) {
    return res.status(400).send('Request body must be an array of students');
  }

  const validationErrors = [];
  const studentDocuments = students.map((student, index) => {
    const { name, email, branch, year, attendance, marks } = student;

    if (!name || !email || !branch || !year) {
      validationErrors.push(`Student at index ${index} is missing required fields`);
    }

    return new Student({ name, email, branch, year, attendance, marks });
  });

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  Student.insertMany(studentDocuments)
    .then(() => res.status(201).send('Students created successfully'))
    .catch(err => {
      console.error('Error creating students:', err);
      res.status(500).send(`Error creating students: ${err.message}`);
    });
});

app.get('/api/students', (req, res) => {
  Student.find()
    .then(students => {
      if (students.length === 0) {
        return res.status(404).send('No students found');
      }
      res.json(students);
    })
    .catch(err => {
      console.error('Error fetching students:', err);
      if (err.name === 'MongoNetworkError') {
        return res.status(503).send('Database connection error');
      }
      res.status(500).send(`Error fetching students: ${err.message}`);
    });
});

// Announcement routes
app.use('/api/announcements', require('./routes/announcements'));

// Assignment routes
app.use('/api/assignments', require('./routes/assignments'));
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && user.password === password) {
      res.json({ success: true, role: user.role });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
