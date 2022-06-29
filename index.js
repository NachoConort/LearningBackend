require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
  res.json({ message:'Funcionaaaa, funciona mejor :)'})
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`)
});