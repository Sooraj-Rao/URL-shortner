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
    let isExist = await User.findOne({ long: url });
    if (isExist) {
      return res.send(isExist.short);
    }
    let short = random();
    const newUrl = new User({ short, long: url });
    await newUrl.save();
    res.send(short);
  } catch (error) {
    return res.json({ message: "Failed to create Short URL" });
  }
});

app.get("/:short", async (req, res) => {
  try {
    const { short } = req.params;
    const findUrl = await User.findOneAndUpdate(
      {
        short,
      },
      {
        $push: {
          history: {
            timeStamp: Date.now(),
          },
        },
      }
    );
    if (findUrl) {
      res.redirect(findUrl.long);
    } else {
      return res.json({
        message: "This URL doesnt exist Bro! Go to this link and genarate one",
        link: "https://srj-url-shortner.vercel.app/",
      });
    }
  } catch (error) {
    return res.json({ message: "Error fetching Url Bro!" });
  }
});

app.get("/count/:short", async (req, res) => {
  try {
    const { short } = req.params;
    const findUrl = await User.findOne({ short });
    if (findUrl) {
      return res.json({ count: findUrl.history.length, data: findUrl });
    } else {
      return res.json({ message: "This URL doesnt exist" });
    }
  } catch (error) {
    return res.json({ message: "Failed to fetch data bro!!" });
  }
});

app.listen(3000, () => console.log("Server started"));
