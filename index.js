const express = require('express');
const app = express();
const port = 3000;

const auth = require('./routes/auth');
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
