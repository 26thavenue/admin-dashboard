import { URLs } from "@/utils/enums";
import { NavLink, NavLinkProps } from "react-router-dom";
import "./header.css";
import React, { useState } from "react";

function HeaderNavs() {
  return (
    <ul className="flex space-x-16 z-[99999999]">
      <li className="relative">
        <HeaderNavLinks
          subUrls={[
            { name: "Why Us", url: URLs.Why_Talk4 },
            { name: "Why Talk4", url: URLs.Why_Talk4_Us },
            { name: "Transfer", url: URLs.Why_Talk4_Transfer },
          ]}
          to={`/${URLs.Why_Talk4}`}
        >
          Why Talk4 Mobile
        </HeaderNavLinks>
      </li>
      <li className="relative">
        <HeaderNavLinks to={`/${URLs.Order_Sim}`}>
          Order Free SIM
        </HeaderNavLinks>
      </li>
      <li className="relative">
        <HeaderNavLinks
          subUrls={[
            { name: "PayG", url: URLs.Product_Plans_PaygA },
            { name: "Talk Longer", url: URLs.Product_Plans_TalkLonger },
            { name: "Data Only", url: URLs.Product_Plans_DataOnly },
          ]}
          to={`/${URLs.Product_Plans}`}
        >
          Plans
        </HeaderNavLinks>
      </li>
      <li className="relative">
        {" "}
        <HeaderNavLinks
          subUrls={[
            { name: "Special UK Rates", url: URLs.Home_Rates_Special },
            { name: "International Calling Rates", url: URLs.Home_Rates_International },
            { name: "Call Roaming", url: URLs.Home_Rates_Roaming },
          ]}
          to={`/${URLs.Home_Rates}`}
        >
          Rates
        </HeaderNavLinks>
      </li>
      <li className="relative">
        <HeaderNavLinks to={`/${URLs.Home_Help}`}>Help</HeaderNavLinks>
      </li>
    </ul>
  );
}

export default HeaderNavs;

interface SubUrls {
  name: string;
  url: string;
}

interface IHeaderNavLinks extends NavLinkProps {
  children: React.ReactNode;
  to: string;
  subUrls?: SubUrls[];
}

function HeaderNavLinks({ children, to, subUrls }: IHeaderNavLinks) {
  const [hover, setHover] = useState(false);
  return (
    <NavLink className="bg-black-3 h-full z-[999999]" to={to}>
      <div>
        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <div className={"w-[auto]"}> {children}</div>
          {subUrls && (
            <>
              {hover && (
                <div className="absolute min-w-[220px] top-4 py-8 -left-10">
                  <div className="bg-white rounded-lg shadow-lg flex gap-0 flex-col">
                    {subUrls?.map((url: SubUrls) => (
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive && "before bg-brand-100 text-brand"
                          } rounded-lg text-black cursor-pointer hover:bg-brand-100 px-4 py-2`
                        }
                        to={`../${to}/${url?.url}`}
                      >
                        {url?.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </NavLink>
  );
}
