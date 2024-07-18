import express from "express";

const router = express.Router();

router.post("/chat", (req, res) => {
  const body = req.body;
  res.status(200).json({ status: "received", message: body });
});

export default router;
