const express = require('express');
const fs = require('fs');
const app = express();

const pickupLinesData = fs.readFileSync('pickup-lines.json', 'utf8');
const pickupLines = JSON.parse(pickupLinesData);

app.get('/api/pickup/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pickupLines.length);
  res.json({ pickupLine: pickupLines[randomIndex] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
