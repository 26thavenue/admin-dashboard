import { ReactElement } from "react";
import { NavLinks } from "./nav_links";
import SidebarNavs from "./sidebarNavs";
// import Avatar from "../../../../assets/images/placeholder.png";
import { useSidebar } from "../../../../utils/contexts/app/useSidebar";
import { SidebarContentTypes } from "../../../../utils/enums";

export type TNavLinks = {
  name: string;
  icon?: ReactElement;
  type?: SidebarContentTypes;
  link?: string;
  children?: TNavLinks[];
  end: boolean;
};

function DBSidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      id="sidebar"
      className={`${
        isOpen ? "block" : "hidden"
      } z-10 md:z-0 md:block fixed md:relative h-[100vh] w-[100%] md:w-2/12 bg-blue text-white`}
    >
      <img
        className=" w-[50%] md:w-[70%] block mx-auto my-3"
        src={""}
        alt={"logo"}
      />
      <div className="flex flex-col mt-2 gap-4 py-4 px-2">
        {NavLinks(SidebarContentTypes.Main).map((link: TNavLinks) => {
          return <SidebarNavs {...link} />;
        })}
        {NavLinks(SidebarContentTypes.Utility).map((link: TNavLinks) => {
          return <SidebarNavs {...link} />;
        })}
      </div>

      {/* <div className="flex flex-col mt-8 gap-4 py-4 px-2 "></div> */}
      {/* <hr /> */}

      {/* <div className="flex flex-col mt-2 gap-4 py-2 px-2 ">
        <div className="group px-4 py-3 text-[1rem rounded-[6px]">
          <div className="group-hover:text-blue inline-flex gap-2 items-center">
            <span className="text-[1.2rem]">
              <img src={Avatar} alt="Avater" />
            </span>
            <span>
              User Person <br />
            </span>
          </div>
        </div>
      </div> */}
    </aside>
  );
}

export default DBSidebar;
