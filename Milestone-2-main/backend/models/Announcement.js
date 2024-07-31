const Assignment = require('./models/Assignment'); // Import the assignment model

app.get('/api/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/assignments', async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    const savedAssignment = await newAssignment.save();
    res.json(savedAssignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
