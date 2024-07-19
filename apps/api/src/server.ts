import express from "express";
import cors from "cors";
import chat from "./routes/chat";
import { corsOptions } from "./cors";

function main() {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(cors(corsOptions));
  app.use(express.json());

  app.get("/test", (_req, res) => {
    // health check
    res.status(200).send("I alive!");
  });

  app.use("/api", chat);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();
