import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className=" flex  justify-center items-center  h-[calc(100vh-4.2rem)]">
      <div>
        <h2 className="scroll-m-20  pb-2 text-5xl font-semibold tracking-tight first:mt-0">
          404 Page Not Found
        </h2>
        <p className=" mt-3 ">Maybe you've clicked the wrong link.</p>
        <Button className=" mt-4" onClick={() => nav("/")}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
