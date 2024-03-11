import { NavLink, useMatches, useMatch } from "react-router-dom";
import { TNavLinks } from "./index";
import { CgChevronDown } from "react-icons/cg";
import { useState } from "react";
import ClickAwayListener from "./sidebarClickOut";

function SidebarNavs({ name, icon, link, children }: TNavLinks) {
  const match = useMatch(`/${link}` || "");
  const matches = useMatches();
  const data = matches[3]?.pathname?.split("/")?.[2];
  const parent = link?.split("/")?.[1];
  console.log({ match, matches, link, parent, data }, Boolean(match));
  const [isOpen, setIsOpen] = useState(false);

  const isPresentUrl = parent !== data;

  const clickAction = () => {
    if (isPresentUrl) {
      setIsOpen(false);
    }
  };

  if (children) {
    return (
      <ClickAwayListener onClickAway={() => clickAction()}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={
            !isPresentUrl
              ? "group w-full px-4 py-1 text-[1rem] flex justify-between items-center hover:bg-white bg-white hover:cursor-pointer rounded-[6px]"
              : "group w-full px-4 py-1 text-[1rem] flex justify-between items-center hover:bg-white hover:cursor-pointer rounded-[6px]"
          }
        >
          <div
            className={
              !isPresentUrl
                ? "group-hover:text-brand text-brand inline-flex gap-2 items-center"
                : "group-hover:text-brand inline-flex gap-2 items-center"
            }
          >
            <span className="text-[1.2rem]">{icon}</span> <span>{name}</span>
          </div>
          <CgChevronDown className="group-hover:text-brand inline-flex gap-1" />
        </button>
        {isOpen && (
          <div className="mt-2 mb-2">
            {children.map((child, index) => {
              const { name, link: childUrl } = child;
              return (
                <NavLink
                  key={index}
                  to={link ? `/${link}/${childUrl}` : "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "group p0-4 py-2  pl-11 text-[0.9rem] flex justify-between items-center bg-white hover:cursor-pointer rounded-[6px] my-1"
                      : "group p0-4 py-2  pl-11 text-[0.9rem] flex justify-between items-center hover:bg-white hover:cursor-pointer rounded-[6px] my-1"
                  }
                >
                  {({ isActive }) => (
                    <div
                      className={
                        isActive
                          ? "group-hover:text-brand text-brand inline-flex gap-2 items-center"
                          : "group-hover:text-brand inline-flex gap-2 items-center"
                      }
                    >
                      <span>{name}</span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
        )}
      </ClickAwayListener>
    );
  }

  return (
    <div>
      <NavLink
        to={link ? `/${link}` : "/"}
        end={true}
        className={({ isActive }) =>
          isActive
            ? "group px-4 py-1 text-[1rem] flex justify-between items-center bg-white hover:cursor-pointer rounded-[6px]"
            : "group px-4 py-1 text-[1rem] flex justify-between items-center hover:bg-white hover:cursor-pointer rounded-[6px]"
        }
      >
        {({ isActive }) => (
          <div
            className={
              isActive
                ? "group-hover:text-brand text-brand inline-flex gap-2 items-center"
                : "group-hover:text-brand inline-flex gap-2 items-center"
            }
          >
            <span className="text-[1.2rem]">{icon}</span> <span>{name}</span>
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default SidebarNavs;
