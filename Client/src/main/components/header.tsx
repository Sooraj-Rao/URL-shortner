import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import logo from "../../../public/logo.png";
import logoDark from "../../../public/dark-logo.png";
import { ModeToggle } from "./theme.toggle";
import { Link } from "react-router-dom";

const Header = ({
  GithubAcc,
  Portfolio,
}: {
  GithubAcc: string;
  Portfolio: string;
}) => {
  return (
    <div className=" flex justify-between px-10 py-3  shadow-slate-200 dark:shadow-none border-b-2  poppins-medium ">
      <div>
        <Link to={"/"}>
          <h2 className="scroll-m-20  h-10 font-bold  pb-2 text-3xl  tracking-tight first:mt-0">
            <img src={logo} className=" h-full dark:hidden block" alt="" />
            <img src={logoDark} className=" h-full dark:block hidden " alt="" />
          </h2>
        </Link>
      </div>
      <div className="  flex gap-x-4 ">
        <ModeToggle />
        <a href={GithubAcc} target="_blank">
          <Button
            variant="link"
            className=" py-2 px-4 border border-slate-400  dark:border-slate-800 rounded md:flex hidden items-center gap-x-1"
          >
            <Github />
            <span>Github</span>
          </Button>
        </a>
        <a href={Portfolio} target="_blank">
          <Button
            variant="link"
            className=" py-2 px-4 border  border-slate-400 dark:border-slate-800 rounded md:flex hidden items-center gap-x-1"
          >
            <ExternalLink />
            <span>Developer</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
