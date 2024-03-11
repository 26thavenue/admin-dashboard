import { URLs } from "@/utils/enums";
import { useNavigate } from "react-router-dom";

function AuthButtonGroups() {
  const navigate = useNavigate();
  return (
    <div className="mt-0 grid-cols-2 gap-3 hidden lg:grid">
      <button
        onClick={() => navigate(`/${URLs.Login}`)}
        className="border border-white text-white w-[100%] rounded-[4.741px] py-2 px-6 text-[14px]"
      >
        Sign In
      </button>
      <button
        onClick={() => navigate(`/${URLs.Login}`)}
        className="text-white bg-blue w-[100%] rounded-[4.741px] py-2 px-6"
      >
        Top Up
      </button>
    </div>
  );
}

export default AuthButtonGroups;
