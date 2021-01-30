const express = require('express');
const fs = require('fs');
const imageUploads = require('./imageUploads');
const app = express();
const port = 3005;

app.use('/image-uploads', imageUploads);
let requestFile = function (req, res, next) {
  req.requestFile = fs.readdirSync('./image-uploads');
  console.log(req.requestFile);
  next()
}
app.use(requestFile);
app.get('/', function (req, res) {
  let responseText = 'File: ' + req.requestFile;
  console.log(responseText);
  res.send(responseText)
})

app.listen(port);
