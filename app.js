const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World, det er koldt i dag');
}); 

app.listen(port);