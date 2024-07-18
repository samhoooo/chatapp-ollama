import express from "express";
import ollama from "ollama";

const router = express.Router();

type RequestBody = {
  message: string;
};

router.post("/chat", async (req, res) => {
  const body: RequestBody = req.body;

  const response = await ollama.chat({
    model: "llama3",
    messages: [{ role: "user", content: body.message }],
  });

  res
    .status(200)
    .json({ status: "success", message: response.message.content });
});

export default router;
