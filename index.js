const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Funcionaaaa')
});

app.listen(4001, () => {
  console.log('Listening in port 4001')
});