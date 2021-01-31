const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './image-uploads',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', false);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res){
    res.send('GET route on image uploads.');
});
router.post('/', upload.single('file'), (req, res) => {
    res.send(200);
});
module.exports = router;
