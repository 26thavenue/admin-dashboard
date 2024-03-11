import { useNavigate } from "react-router-dom";
import { Logos } from "../../../assets/logo";
import AuthButtonGroups from "./buttonGroups";
import HeaderNavs from "./headerNavs";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-brand h-[72px] z-[99999999] relative">
      <div className="max-w-6xl  mx-auto my-0 h-[inherit] text-white font-normal text-[14px] flex items-center">
        <div className="w-[100%] mb-0 flex items-center justify-between gap-8 py-2">
          <div className="col-span-2">
            <img
              onClick={() => navigate("/")}
              className="w-[80%] cursor-pointer"
              src={Logos.Everyone.Mobile.img}
              alt={Logos.Everyone.Mobile.alt}
            />
          </div>
          <nav className="hidden lg:block">
            <HeaderNavs />
          </nav>
          <AuthButtonGroups />
        </div>
      </div>
    </header>
  );
}

export default Header;
