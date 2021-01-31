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

router.get('/:image', function(req, res){
    res.sendFile(__dirname + '/image-uploads' + req.path);
});

router.post('/', upload.single('file'), (req, res) => {
  console.log("in router post")

  return new Promise(() => {
    const handler = tfn.io.fileSystem('./tfjs_model/model.json');
  
    return handler;
  
  }).then((yourHandler) => {
    return tf.loadLayersModel(handler);
  }).catch((error) => {
    console.log(error) // here u can check an error
  })
 
});
let model;
async function load() {
  const handler = tfn.io.fileSystem('./tfjs_model/model.json');
  model = await tf.loadLayersModel("./tfjs_model/group1-shard5of5.bin");
  console.log("here");
  console.log(model);
  res.send(predict(model));
  res.send("success");
  return model;
  
};

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
}
module.exports = router;
