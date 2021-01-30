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

router.get('/', function(req, res){
   res.send('GET route on image uploads.');
});
router.post('/', upload.single('file'), (req, res) => {
    const file = req.file; // file passed from client
    const meta = req.body; // all other values passed from the client, like name, etc..
});

module.exports = router;
