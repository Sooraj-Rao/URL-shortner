import express from "express";
import { Connect } from "./src/Db.js";
import cors from "cors";
import { router } from "./src/Router.js";

const app = express();
Connect();
app.use(express.json());
app.use(
  cors({
    origin: "https://qucik-link.vercel.app",
  })
);
app.use(router);

app.listen(3000, () => console.log("Server started"));
