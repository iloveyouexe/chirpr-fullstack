const express = require("express");
const router = express.Router();
import db from "../db";

// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// // REST API

// Read
router.get("/:id?", async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      res.json(await db.chirpr.one(id));
    } else {
      res.json(await db.chirpr.all());
    }
  } catch (e) {
    console.log(e);
    res.send(500);
  }
});

// Create
router.post("/", async (req, res) => {
  const body = req;

  try {
    res.json(await db.chirpr.one(body));
  } catch (e) {
    console.log(e);
    res.send(500);
  }
});

// // Delete
// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   // chirpsStore.DeleteChirp(id);
//   res.sendStatus(200);
// });

// // Update
// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;

//   // chirpsStore.UpdateChirp(id, body);
//   res.sendStatus(200);
export default router;
