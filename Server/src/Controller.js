import { CustomUrl, NormalUrl } from "./Model.js";
import { random } from "./random.js";

export const AddURL = async (req, res) => {
  try {
    const { long } = req.body;
    let isExist = await NormalUrl.findOne({ long });
    if (isExist) {
      return res.json({ short: isExist.short, success: true });
    }
    let short = random();
    const newUrl = new NormalUrl({ short, long });
    await newUrl.save();
    res.json({ short: short, success: true });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Failed to create Short URL", success: false });
  }
};

export const AddCustomURL = async (req, res) => {
  try {
    const { long, short } = req.body;
    let isExist = await CustomUrl.findOne({ short });
    if (isExist) {
      return res.json({
        message: "Custom URL is already taken",
        success: false,
      });
    }
    const newUrl = new CustomUrl({ short, long });
    await newUrl.save();
    res.json({ short: short, success: true });
  } catch (error) {
    return res.json({ message: "Failed to create Short URL", success: false });
  }
};

export const GetURL = async (req, res) => {
  try {
    const { short } = req.params;
    let findUrl;

    let Model = short.length == 8 ? NormalUrl : short.length >= 10 && CustomUrl;
    findUrl = await Model.findOneAndUpdate(
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
        message: "This URL doesnt exist Bro! Go to this page and genarate one",
        link: "https://srj-url-shortner.vercel.app/",
      });
    }
  } catch (error) {
    return res.json({ message: "Error fetching Url Bro!", success: false });
  }
};

export const GetCount = async (req, res) => {
  try {
    const { short } = req.params;
    const findUrl = await NormalUrl.findOne({ short });
    if (findUrl) {
      return res.json({ count: findUrl.history.length, data: findUrl });
    } else {
      return res.json({ message: "This URL doesnt exist" });
    }
  } catch (error) {
    return res.json({ message: "Failed to fetch data bro!!" });
  }
};

export const GetCustomCount = async (req, res) => {
  try {
    const { short } = req.params;
    const findUrl = await CustomUrl.findOne({ short });
    if (findUrl) {
      return res.json({ count: findUrl.history.length, data: findUrl });
    } else {
      return res.json({ message: "This URL doesnt exist" });
    }
  } catch (error) {
    return res.json({ message: "Failed to fetch data bro!!" });
  }
};
