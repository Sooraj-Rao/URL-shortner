import { CustomUrl, NormalUrl } from "./Model.js";
import { random } from "./random.js";
import { Validator } from "./validate.js";

export const AddURL = async (req, res) => {
  try {
    const { long, custom: short } = req.body;
    const { error, message } = Validator({ long, short });
    if (error) {
      console.log(message);
      return res.json({
        message: message,
        success: false,
      });
    }
    const [normalUrlExists, customUrlExists] = await Promise.all([
      NormalUrl.findOne({ long }),
      CustomUrl.findOne({ short }),
    ]);

    if (normalUrlExists && !short) {
      return res.json({ short: normalUrlExists.short, success: true });
    }
    if (customUrlExists) {
      return res.json({
        message: "Custom URL is already taken",
        success: false,
      });
    }
    let shortUrl = random();
    if (short) {
      const newUrl = new CustomUrl({ short, long });
      await newUrl.save();
      res.json({ short: short, success: true });
    } else {
      const newUrl = new NormalUrl({ short: shortUrl, long });
      await newUrl.save();
      res.json({ short: shortUrl, success: true });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Failed to create Short URL", success: false });
  }
};

export const GetURL = async (req, res) => {
  try {
    const { short } = req.params;
    const [findUrl, findUrlCustom] = await Promise.all([
      updateUrlHistory(NormalUrl, short),
      updateUrlHistory(CustomUrl, short),
    ]);

    if (findUrl || findUrlCustom) {
      const url = findUrl ? findUrl.long : findUrlCustom.long;
      const redirectUrl = url.startsWith("http") ? url : `http://${url}`;
      res.redirect(redirectUrl);
    } else {
      res.redirect(`${Link}e`);
    }
  } catch (error) {
    console.error("Error in GetURL:", error);
    res.redirect(`${Link}e`);
  }
};

export const GetCount = async (req, res) => {
  try {
    const { short } = req.params;
    const [normalUrlCount, CustomUrlCount] = await Promise.all([
      NormalUrl.findOne({ short }),
      CustomUrl.findOne({ short }),
    ]);
    if (normalUrlCount || CustomUrlCount) {
      const url = normalUrlCount ? normalUrlCount : CustomUrlCount;
      return res.json({ count: url.history.length, data: url });
    } else {
      return res.json({ message: "This URL doesnt exist" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Failed to fetch data bro!!" });
  }
};



const updateUrlHistory = async (Model, short) => {
  return await Model.findOneAndUpdate(
    { short },
    {
      $push: {
        history: {
          timeStamp: Date.now(),
        },
      },
    }
  );
};
