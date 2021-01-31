const express = require('express');
const fs = require('fs');
const imageUploads = require('./imageUploads');
const app = express();
var path = require('path');
const port = 3005;

app.use("/public", express.static(path.join(__dirname, 'image-uploads')));

app.use('/image-uploads', imageUploads);

let requestFile = function (req, res, next) {
  req.requestFile = fs.readdirSync('./image-uploads/');
  // console.log(req.requestFile);
  next()
}
app.use(requestFile);
app.get('/', function (req, res) {
  let responseText = 'File: ' + req.requestFile;
  res.send(responseText)
})

app.listen(port);
