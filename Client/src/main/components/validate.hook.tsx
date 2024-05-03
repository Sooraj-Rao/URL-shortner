type T_URL = {
  long: string;
  custom: string;
};

export const Validator = (URL: T_URL, Iscustom: boolean) => {
  const { long, custom } = URL;
  if (Iscustom && !custom) {
    return { message: "Please Enter custom backhalf URL", error: true };
  }
  if (Iscustom && custom?.length < 8) {
    return { message: "Custom backhalf is too short", error: true };
  }
  if (Iscustom && custom && !isValidCustom(custom)) {
    return { message: "Invalid custom backhalf format", error: true };
  }

  if (!long) {
    return { message: "Please enter a URL", error: true };
  } else if (!isValidURL(long)) {
    return { message: "Invalid URL format", error: true };
  }

  return { error: false, message: null };
};

const isValidURL = (url: string) => {
  if (!url || url.length < 8 || !url.includes(".")) {
    return false;
  }
  return true;
};

const isValidCustom = (custom: string) => {
  const customRegex = /^[a-zA-Z0-9_-]+$/;
  return customRegex.test(custom);
};
