// server.js
const express = require('express');
const app = express();
const path = require('path');
const { createAnimation } = require('./animation');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/generate-video', async (req, res) => {
  const text = req.body.text;
  try {
    const message = await createAnimation(text);
    res.json({ success: true, message });
  } catch (error) {
    console.error('Error generating video:', error);
    res.status(500).json({ success: false, error: 'Failed to generate video' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
