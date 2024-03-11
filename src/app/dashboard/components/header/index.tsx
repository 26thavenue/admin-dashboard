import { Logos } from "../../../../assets/logo";
import Avatar from "../../../../assets/images/placeholder.png";
import { useSidebar } from "../../../../utils/contexts/app/useSidebar";
import Hamburger from "hamburger-react";
import { IoIosNotificationsOutline } from "react-icons/io";
// import TelSwitch from "./telSwitch";

function DBHeader() {
  return (
    <header className="sm:h-[72px] bg-white text-black px-1 md:px-4 flex items-center justify-end g-2">
      <div className="flex items-center md:hidden">
        <HandleDisplaySidebar />
        <img
          className=" w-[135px] md:w-[135px] block mx-auto my-0"
          src={Logos.Everyone.Pink_Mobile.img}
          alt={Logos.Everyone.Pink_Mobile.alt}
        />
      </div>

      {/* <TelSwitch /> */}

      <div className="inline-flex items-center justify-end gap-4">
        <IoIosNotificationsOutline size={30} className="text-[#667085]" />
        <div className="hidden md:block">
          <img src={Avatar} alt="Avater" />
        </div>
      </div>
    </header>
  );
}

export default DBHeader;

function HandleDisplaySidebar() {
  const { toggleSidebar, isOpen } = useSidebar();
  return (
    <div className="z-[9999] relative block md:hidden">
      <Hamburger
        color={isOpen ? "#fff" : "#000"}
        toggled={isOpen}
        toggle={toggleSidebar}
        rounded
        size={24}
      />
    </div>
  );
}
