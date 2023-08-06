import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.use(express.json());

router.post("/create", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

// Get all the user
router.get("/get", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(201).json(showAll);
  } catch (error) {
    res.send(401).json({ error: error.message });
  }
});

// Get single user
router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(201).json(singleUser);
  } catch (error) {
    res.send(401).json({ error: error.message });
  }
});

// delete user
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    res.status(201).json(singleUser);
  } catch (error) {
    res.send(401).json({ error: error.message });
  }
});

// update the user
router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const singleUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(singleUser);
  } catch (error) {
    res.send(401).json({ error: error.message });
  }
});

export default router;
