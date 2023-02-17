const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require('cors')
// const { MongoClient, ServerApiVersion } = require('mongodb');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const documentRoute = require("./routes/documents");
const multer = require("multer");
const path = require("path");


dotenv.config();
app.use(cors());
// app.use(cors(),express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true,
  }).then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      // cb(null, "hello.jpg");
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });

  // app.all('/', function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next()
  // });

  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/document", documentRoute);

  app.listen("5000", () => {
    console.log('BACKEND running CORS-enabled web server.')
  });