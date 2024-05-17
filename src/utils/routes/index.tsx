import { Outlet, createBrowserRouter } from "react-router-dom";
import { URLs } from "../enums";
import { Login, Signup, ChangePassword, ResetPassword } from "../../app/auth";
import Dashboard from "../../app/dashboard/index";
import {
  DBHome,
  Plans,
  Rates,
  NationalRates,
  History,
  // TopUp,
  // ConfirmTopUp,
  Porting,
  Settings,
} from "../../app/dashboard/pages";
import { includeDashboardUrl } from "../resources/includeDashboardUrl";
import App from "../../App";
import OrderPlan from "@/site/OrderPlan";
import WhyTalk4 from "@/site/WhyTalk4";
import LandingPagePlan from "@/site/Plans";
import WhyUs from "@/site/WhyTalk4/Why";
import Transfer from "@/site/WhyTalk4/Transfer";
import Payga from "@/site/Plans/PAYGA";
import TalkLonger from "@/site/Plans/TalkLonger";
import DataOnly from "@/site/Plans/DataOnly";
import LandingPageRates from "@/site/Rates";
import InternationalCallingRates from "@/site/Rates/InternationalCallingRates";
import RoamingRates from "@/site/Rates/RoamingRates";
import Help from "@/site/Help";
import OrderPreview from "@/site/OrderPlan/Preview";
import AccessControlView from "@/app/dashboard/pages/AccessControl/AccessControlView";
import Customer from "@/app/dashboard/pages/Customer";
import CustomerView from "@/app/dashboard/pages/Customer/CustomerView";
import AdminProducts from "@/app/dashboard/pages/AdminProducts";
import NumbersOperations from "@/app/dashboard/pages/NumbersOps";
import Subscriptions from "@/app/dashboard/pages/Subscriptions";
import Transactions from "@/app/dashboard/pages/Transactions";

const router = createBrowserRouter([
  {
    path: URLs.Home,
    element: <Outlet />,
    errorElement: <p>Page not Found</p>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: `/${URLs.Resources}`,
        element: <Outlet />,
      },
      {
        path: `/${URLs.Home_Help}`,
        element: <Help />,
      },
      {
        path: `/${URLs.Product_Plans}`,
        element: <Outlet />,
        children: [
          { index: true, element: <LandingPagePlan /> },
          {
            path: URLs.Product_Plans_PaygA,
            element: <Payga />,
          },
          {
            path: URLs.Product_Plans_TalkLonger,
            element: <TalkLonger />,
          },
          {
            path: URLs.Product_Plans_DataOnly,
            element: <DataOnly />,
          },
        ],
      },
      {
        path: `/${URLs.Order_Sim}`,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <OrderPlan />,
          },
          {
            path: `${URLs.Order_Preview}/:type/payment`,
            element: <OrderPreview />,
          },
          {
            path: `${URLs.Order_Payment}/:id/:type`,
            element: <OrderPreview />,
          },
        ],
      },
      {
        path: `/${URLs.Home_Rates}`,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <LandingPageRates />,
          },
          {
            path: URLs.Home_Rates_Special,
            element: <LandingPageRates />,
          },
          {
            path: URLs.Home_Rates_International,
            element: <InternationalCallingRates />,
          },
          {
            path: URLs.Home_Rates_Roaming,
            element: <RoamingRates />,
          },
        ],
      },
      {
        path: `/${URLs.Why_Talk4}`,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <WhyTalk4 />,
          },
          {
            path: URLs.Why_Talk4,
            element: <WhyTalk4 />,
          },
          {
            path: URLs.Why_Talk4_Us,
            element: <WhyUs />,
          },
          {
            path: URLs.Why_Talk4_Transfer,
            element: <Transfer />,
          },
        ],
      },
      {
        path: `/${URLs.Login}`,
        element: <Login />,
      },
      {
        path: `/${URLs.SignUp}`,
        element: <Signup />,
      },
      {
        path: `/${URLs.ChangePassword}`,
        element: <ChangePassword />,
      },
      {
        path: `/${URLs.ReesetPassword}`,
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: <p>Not Found</p>,
      },
      {
        path: `/${URLs.Dashboard}`,
        element: <Dashboard />,

        children: [
          {
            errorElement: <App />,
            children: [
              {
                index: true,
                element: <DBHome />,
              },
              {
                path: `/${includeDashboardUrl(URLs.Access_Control)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <History /> },
                  {
                    path: ":id/admin",
                    element: <AccessControlView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Numbers_Ops)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <NumbersOperations /> },
                  {
                    path: ":id/admin",
                    element: <AccessControlView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Products)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <AdminProducts /> },
                  {
                    path: ":id/admin",
                    element: <AccessControlView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Customers)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <Customer /> },
                  {
                    path: ":id/admin",
                    element: <CustomerView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Subscriptions)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <Subscriptions /> },
                  {
                    path: ":id/admin",
                    element: <CustomerView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Transactions)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <Transactions /> },
                  {
                    path: ":id/admin",
                    element: <CustomerView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Plans)}`,
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    element: <Plans key={URLs.Plan_Monthly} />,
                  },
                  {
                    path: URLs.Plan_Monthly,
                    element: <Plans key={URLs.Plan_Monthly} />,
                  },
                  {
                    path: URLs.Plan_PayG,
                    element: <Plans key={URLs.Plan_PayG} />,
                  },
                  {
                    path: URLs.Plan_International,
                    element: <Plans key={URLs.Plan_International} />,
                  },
                  {
                    path: URLs.Plan_Data,
                    element: <Plans key={URLs.Plan_International} />,
                  },
                ],
              },

              // {
              //   path: `/${includeDashboardUrl(URLs.TopUp)}`,
              //   element: <Outlet />,
              //   children: [
              //     { index: true, element: <TopUp /> },
              //     { path: "confirm", element: <ConfirmTopUp /> },
              //   ],
              // },
              {
                path: `/${includeDashboardUrl(URLs.Payments)}`,
                element: <History />,
              },
              {
                path: `/${includeDashboardUrl(URLs.Porting_Details)}`,
                element: <Porting />,
              },
              {
                path: `/${includeDashboardUrl(URLs.Account_Settings)}`,
                element: <Settings />,
              },
              {
                path: `/${includeDashboardUrl(URLs.Rates)}`,
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    element: <Rates key={URLs.Plan_Monthly} />,
                  },
                  {
                    path: URLs.Rates_International,
                    element: <Rates key={URLs.Plan_Monthly} />,
                  },
                  {
                    path: URLs.Rates_National,
                    element: <NationalRates key={URLs.Plan_PayG} />,
                  },
                  {
                    path: URLs.Rates_Roaming,
                    element: <Rates key={URLs.Plan_International} />,
                  },
                ],
              },
              {
                path: "*",
                element: <p>Not Found</p>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export { router };
