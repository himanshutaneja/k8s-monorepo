const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the Node.js API inside Kubernetes! 🐳" });
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
