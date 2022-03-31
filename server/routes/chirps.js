const express = require("express");
const router = express.Router();
import db from "../db";

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
    res.sendStatus(500);
  }
});

// Create
router.post("/", async (req, res) => {
  const body = req;
  try {
    res.json(await db.chirpr.post(body.userid, body.content, body.location));
  } catch (e) {
    console.log(e);
    res.send(500);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await db.chirpr.del(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(200);
  }
});

// Update
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const content = req.body.content;
  try {
    res.json(await db.chirpr.update(id, content));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
