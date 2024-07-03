import {
  VscGraph,
  VscPieChart,
  VscDiffAdded,
  VscChecklist,
  // VscLayers,
  // VscAccount,
  // VscChecklist,
} from "react-icons/vsc";
import { TNavLinks } from ".";
import { URLs, SidebarContentTypes } from "../../../../utils/enums";
import { includeDashboardUrl } from "../../../../utils/resources/includeDashboardUrl";

export const NavLinks = (filter_type?: string): TNavLinks[] => {
  const links = [
    {
      name: "Dashboard",
      icon: <VscGraph />,
      type: SidebarContentTypes.Main,
      link: URLs.Dashboard,
      end: true,
    },
    {
      name: "Access Control",
      icon: <VscDiffAdded />,
      type: SidebarContentTypes.Main,
      link: includeDashboardUrl(URLs.Access_Control),
      end: false,
    },
    {
      name: "Numbers Ops",
      icon: <VscDiffAdded />,
      type: SidebarContentTypes.Main,
      link: includeDashboardUrl(URLs.Numbers_Ops),
      end: false,
    },
    {
      name: "Products",
      icon: <VscDiffAdded />,
      type: SidebarContentTypes.Main,
      link: includeDashboardUrl(URLs.Products),
      end: false,
    },
    {
      name: "Customers",
      icon: <VscPieChart />,
      type: SidebarContentTypes.Main,
      link: includeDashboardUrl(URLs.Customers),
      end: false,
    },
    // {
    //   name: "Products",
    //   icon: <VscLayers />,
    //   type: SidebarContentTypes.Main,
    //   link: includeDashboardUrl(URLs.Products),
    // },
    // {
    //   name: "Providers",
    //   icon: <VscLayers />,
    //   type: SidebarContentTypes.Main,
    //   link: includeDashboardUrl(URLs.Providers),
    // },
    {
      name: "Subscriptions",
      icon: <VscChecklist />,
      type: SidebarContentTypes.Main,
      link: includeDashboardUrl(URLs.Subscriptions),
      end: false,
    },
    {
      name: "Transactions",
      icon: <VscChecklist />,
      type: SidebarContentTypes.Main,
      link: includeDashboardUrl(URLs.Transactions),
      end: false,
    },
    // {
    //   name: "Audit Trail",
    //   icon: <VscAccount />,
    //   type: SidebarContentTypes.Main,
    //   link: includeDashboardUrl(URLs.Audit_Trail),
    //   children: [
    //     {
    //       name: "National Rates",
    //       link: URLs.Rates_National,
    //     },
    //     {
    //       name: "International Rates",
    //       link: URLs.Rates_International,
    //     },
    //     {
    //       name: "Roaming Rates",
    //       link: URLs.Rates_Roaming,
    //     },
    //   ],
    // },
    // {
    //   name: "Integrations",
    //   icon: <VscAccount />,
    //   type: SidebarContentTypes.Main,
    //   link: includeDashboardUrl(URLs.Integrations),
    // },
    // {
    //   name: "Settings",
    //   icon: <VscDiffAdded />,
    //   type: SidebarContentTypes.Utility,
    //   link: includeDashboardUrl(URLs.Account_Settings),
    // },
  ];

  //Nav Bar Filter
  const filter_links = links.filter((link) => {
    return link?.type === filter_type;
  });

  return filter_links;
};
