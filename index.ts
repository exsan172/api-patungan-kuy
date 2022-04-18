import express from "express";
import env from "./configs/env.config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from api-patungan-kuy");
});

app.listen(env.port_app, () => {
  console.log(`api-patungan-kuy listening at http://localhost:${env.port_app}`);
});
