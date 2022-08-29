import fs from "fs";
import https from "http";
import express from "express";
import helmet from "helmet";
import path from "path";
import { checkLoggedIn } from "./middleware/loginMiddleware.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
const PORT = 3000;

app.get("/auth/google", (req, res) => {});
app.get("/auth/google/callback", (req, res) => {});

app.get("/auth/logout", (req, res) => {});

app.get("/secret", checkLoggedIn, (req, res) => {
  res.send("Your personal secret value is 42");
});

app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log("Hello from Server !");
  });
