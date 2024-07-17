import express from "express";

function main() {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(express.json());

  app.get("/test", (_req, res) => {
    // health check
    res.status(200).send("I alive!");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
}
  
main();