import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Copy } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { Validator } from "../components/validate.hook";

const Home = ({ Portfolio }: { Portfolio: string }) => {
  const [Iscustom, setCustom] = useState(false);
  const refer = useRef<HTMLInputElement>(null);
  const [ShortUrl, setShortUrl] = useState("");
  const [loader, setloader] = useState(false);
  const [URL, setURL] = useState({
    long: "",
    custom: "",
  });

  const Server = import.meta.env.VITE_SERVER;

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setURL({ ...URL, [name]: value });
  };

  const ShortenLongUrl = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = Validator(URL, Iscustom);

    if (error) {
      return toast({
        variant: "destructive",
        description: error,
      });
    }

    try {
      setloader(true);
      const res = await axios.post(`${Server}/add`, URL);
      const { success, message } = res.data;
      setloader(false);
      if (success) {
        const shortUrl = Server + "/" + res.data.short;
        setShortUrl(shortUrl);
      } else {
        toast({
          variant: "destructive",
          description: message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to shorten URL",
      });
    } finally {
      setloader(false);
    }
  };

  const CopyURL = async () => {
    if (!refer.current) return;
    toast({
      description: "URL Copied to the clipboard",
    });
    refer.current.focus();
    refer.current.select();
    await window.navigator.clipboard.writeText(ShortUrl.split("//")[1]);
  };

  return (
    <div>
      <h1
        className={`scroll-m-20 text-center my-10 poppins-extrabold tracking-tight text-2xl sm:text-4xl lg:text-6xl
      `}
      >
        {URL.long ? (
          <span className=" sm:text-3xl text-xl px-4 font-normal tracking-normal  duration-300 ">
            Shorten unlimited URLs here for free!
          </span>
        ) : (
          <span className="duration-300">
            Quick Link : A Rapid URL Shortener
          </span>
        )}
      </h1>

      <div className=" flex justify-center  poppins-medium ">
        {!ShortUrl ? (
          <form onSubmit={ShortenLongUrl}>
            <div className="grid w-full  items-center gap-1.5 mt-10">
              <Label htmlFor="url">Enter a long URL</Label>
              <Input
                value={URL.long}
                onChange={handleChange}
                name="long"
                type="text"
                placeholder="Your long URL here.."
                className=" mt-2  sm:min-w-80 w-60 border-slate-500 focus:border-white"
              />
              <div className=" flex my-2 gap-x-3">
                <Checkbox onCheckedChange={() => setCustom(!Iscustom)} />
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Need Custom backhalf for URL
                </label>
              </div>
            </div>
            {Iscustom && (
              <div>
                <Input
                  value={URL.custom}
                  onChange={handleChange}
                  name="custom"
                  placeholder="Enter custom backhalf "
                  className=" w-60 my-2 border-slate-500 focus:border-white"
                />
              </div>
            )}
            <div>
              <Button type="submit" className="  mt-4" variant="default">
                {!loader ? (
                  "Shorten URL"
                ) : (
                  <span className=" h-5 w-5 border-2 border-t-transparent dark:border-t-white border-white dark:border-black rounded-full  animate-spin"></span>
                )}
              </Button>
            </div>
          </form>
        ) : (
          !loader && (
            <div className=" flex justify-center items-center flex-col my-20">
              <div className=" flex flex-col justify-center items-center ">
                <h2 className="scroll-m-10  pb-2 sm:text-3xl text-xl font-semibold tracking-tight first:mt-0">
                  Your {URL.custom && "custom"} shortened URL is
                </h2>
                <div className="flex w-full max-w-sm my-5 items-center justify-center  space-x-2">
                  <Input
                    ref={refer}
                    value={ShortUrl.split("//")[1]}
                    disabled
                    type="text"
                    className="border-slate-500 sm:w-60 w-48  disabled:cursor-default text-black dark:text-white font-semibold  focus:border-white"
                  />
                  <Button title="Copy URL" onClick={CopyURL}>
                    {" "}
                    <Copy size={20} />
                  </Button>
                </div>
              </div>
              <Button
                className=" mt-10"
                onClick={() => {
                  setShortUrl("");
                  setURL({ long: "", custom: "" });
                  setCustom(false);
                }}
              >
                Create another
              </Button>
            </div>
          )
        )}
      </div>
      <a
        href={Portfolio}
        className=" absolute sm:hidden text-sm bottom-3 left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        Developed by
        <span className=" cursor-pointer  ml-1  font-semibold text-blue-800">
          Sooraj
        </span>
      </a>
    </div>
  );
};

export default Home;
