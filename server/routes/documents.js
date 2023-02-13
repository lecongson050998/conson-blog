const router = require("express").Router();
const Document = require('../models/DocumentLCS');

//CREATE document
router.post("/", async (req, res) => {
    const newDoc = new Document(req.body);
    try {
      const saveDoc = await newDoc.save();
      res.status(200).json(saveDoc);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //UPDATE document
router.put("/:id", async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (doc.username === req.body.username) {
      try {
        const updatedDoc = await Document.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedDoc);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE document
router.delete("/:id", async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (doc.username === req.body.username) {
      try {
        await doc.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET document
router.get("/:id", async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL docs
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let docs;
    if (username) {
      docs = await Document.find({ username });
    }else {
      docs = await Document.find();
    }
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(err);
  }
});


  module.exports = router;