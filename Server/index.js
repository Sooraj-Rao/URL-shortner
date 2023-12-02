import express from "express";
import { Connect } from "./Db.js";
import { random } from "./random.js";
import { User } from "./UserModel.js";
import cors from "cors";

const app = express();
Connect();

app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
    const { url } = req.body;
    let short = random();
    const newUrl = new User({ short, long: url });
    await newUrl.save();
    res.send(short);
  } catch (error) {
    console.log(error);
    res.send("Error Posting Found");
  }
});

app.get("/:short", async (req, res) => {
  try {
    const { short } = req.params;
    let findUrl = await User.findOne({ short });
    return res.redirect(findUrl.long);
  } catch (error) {
    console.log(error);
    res.send("Error Getting Found");
  }
});

app.listen(3000, () => console.log("Server started"));
