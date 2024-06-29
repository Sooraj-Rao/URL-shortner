import express from "express";
import { Connect } from "./src/Db.js";
import cors from "cors";
import { router } from "./src/Router.js";

const app = express();
Connect();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://srj-quicklink.vercel.app",
      "https://quicklink.soorajrao.in",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(router);

app.listen(3000, () => console.log("Server started"));
