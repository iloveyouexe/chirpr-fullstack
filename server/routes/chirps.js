import * as express from "express";
import db from "../db";
const router = express.Router();

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
  try {
    const body = req.body;

    const dbRes = await db.chirpr.insert(
      body.userid,
      body.content,
      body.location
    );
    res.status(200).send(dbRes);
  } catch (error) {
    console.log(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const dbRes = await db.chirpr.destroy(id);
    res.status(200).send(dbRes);
  } catch (e) {
    console.log(e);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const content = req.body.content;

    const dbRes = await db.chirpr.update(id, content);

    res.status(200).json(dbRes);
  } catch (e) {
    console.log(e);
  }
});

export default router;
