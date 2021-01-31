const express = require('express');
const router = express.Router();
const multer = require('multer');
const tf = require("@tensorflow/tfjs");
const tfn = require("@tensorflow/tfjs-node");

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
  console.log("")
  // return new Promise(() => {
  //   const handler;
  
  //   return handler;
  
  // }).then(tfn.io.fileSystem('./tfjs_model/model.json') => {
  //   return tf.loadLayers(tfn.io.fileSystem('./tfjs_model/model.json'))
  // }).catch((error) => {
  //   console.log(error) // here u can check an error
  // })

  async function load() {
    const handler = tfn.io.fileSystem('./tfjs_model/model.json');
    var model = await tf.loadLayersModel(handler);
    console.log("here");
    console.log(model);
    return model;
  };
  model = load();
  

// const handler = tfn.io.fileSystem('./tfjs_model/model.json');
// const model = await tf.loadModel(handler);

  function predict(model) {
    // code to connect to the <input> given value will go here (just not yet)
    
    const image = req.file;
    console.log("here");
    const image_tensor = tf.convert_to_tensor(image)  // and convert it to a tensor
    const verbose = true;
   
    console.log(image_tensor.print(verbose));
    const reshaped_tensor = tf.reshape([null,28,28,3]);
    console.log(reshaped_tensor.print(verbose));
    
    // now lets make the prediction
    model.then(model => {
      let result = model.predict(reshapedTensor); 
      console.log(result);
      // result = result.round().dataSync()[0];  // round and get value
      // alert(result ? "odd" : "even");  // creates pop-up
    });
  };
  
 
      console.log(req.file);
      res.send(req.file);
  });
  
module.exports = router;
