import { Button } from "@/components/ui/button";
import logo from "../../../public/logo.png";
import logoDark from "../../../public/dark-logo.png";
import { ModeToggle } from "./theme.toggle";
import { Link } from "react-router-dom";
import { AiOutlineBug } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Header = ({
  data,
}: {
  data: { contact: string; main: string; github: string };
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
        <div className="  flex sm:gap-x-4 ">
          <a href={data.contact} target="_blank">
            <Button
              variant="ghost"
              className=" py-2 px-4 rounded md:flex hidden items-center gap-x-3"
            >
              <AiOutlineBug size={20} />
              <span>Report an Issue</span>
            </Button>
          </a>
          <a href={data.github} target="_blank">
            <Button
              variant="ghost"
              className=" py-2 px-4   rounded md:flex hidden items-center gap-x-1"
            >
              <FaGithub size={20} />
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
