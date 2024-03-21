// Assuming the code is for a simple web server using Node.js and Express

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Suggestion: Add a route to handle a specific API endpoint
app.get('/api/data', (req, res) => {
  const data = { example: 'This is an example object' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
