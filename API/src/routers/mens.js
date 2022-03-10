const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

//Create and Handle The Post Request.
router.post("/mens", async (req, res) => {
  try {
    const addingMensRank = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRank.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read the data
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get data by _id, name and so on.
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update the data by _id, name and so on.
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete the data by _id, name and so on.
router.delete("/mens/:id", async (req, res) => {
  try {
    // const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUDelete(req.params.id);
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
