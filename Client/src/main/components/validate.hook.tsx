type T_URL = {
  long: string;
  custom: string;
};

export const Validator = (URL: T_URL, Iscustom: boolean) => {
  const { long, custom } = URL;
  if (Iscustom && !custom) {
    return { error: "Please Enter custom backhalf URL" };
  }
  if (Iscustom && custom?.length < 8) {
    return { error: "Custom backhalf is too short" };
  }
  if (Iscustom && custom && !isValidCustom(custom)) {
    return { error: "Only letters,numbers allowed" };
  }

  if (!long) {
    return { error: "Please enter a URL" };
  } else if (!isValidURL(long)) {
    return { error: "Invalid URL format"};
  }

  return { error: null };
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
