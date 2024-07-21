import express from "express";
import ollama from "ollama";

const router = express.Router();

type RequestBody = {
  message: string;
};

router.post("/chat", async (req, res) => {
  const body: RequestBody = req.body;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  const response = await ollama.chat({
    model: process.env.OLLAMA_MODEL ?? "llama3",
    messages: [{ role: "user", content: body.message }],
    stream: true,
  });

  for await (const part of response) {
    res.write(part.message.content);
  }

  res.end();
});

export default router;
