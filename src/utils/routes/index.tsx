import { Outlet, createBrowserRouter } from "react-router-dom";
import { URLs } from "../enums";
import { Login, Signup, ChangePassword, ResetPassword } from "../../app/auth";
import Dashboard from "../../app/dashboard/index";
import {
  DBHome,
  Plans,
  
  History,
  Porting,
  Settings,
} from "../../app/dashboard/pages";
import { includeDashboardUrl } from "../resources/includeDashboardUrl";
import App from "../../App";
import AccessControlView from "@/app/dashboard/pages/AccessControl/AccessControlView";
import Customer from "@/app/dashboard/pages/Customer";
import CustomerView from "@/app/dashboard/pages/Customer/CustomerView";
import AdminProducts from "@/app/dashboard/pages/AdminProducts";
import ResourcePage from "@/app/dashboard/pages/Resource/Resource";
import NumbersOperations from "@/app/dashboard/pages/NumbersOps";
// import AdminCreateProducts from "@/app/dashboard/pages/AdminProducts/CreateProducts";
import AssignNumberOperations from "@/app/dashboard/pages/NumbersOps/AssignNumberOperations";

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
      // {
      //   path: `/${URLs.Home_Help}`,
      //   element: <Help />,
      // },
      
      
     
     
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
                  {
                    path: ":id/assign",
                    element: <AssignNumberOperations />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Products)}`,
                element: <ResourcePage />,
                children: [
                  {
                    path: ":id/admin",
                    element: <AccessControlView />,
                  },
                  // {
                  //   path: "create",
                  //   element: <AdminCreateProducts />,
                  // },
                  // {
                  //   path: ":id/:name",
                  //   element: <AdminCreatePlans />,
                  // },
                  // {
                  //   path: "plans/:id/:name",
                  //   element: <PlansTable />,
                  // },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Customers)}`,
                element: <Outlet />,
                children: [
                  { index: true, element: <Customer /> },
                  {
                    path: ":mobileNumber/admin",
                    element: <CustomerView />,
                  },
                ],
              },
              {
                path: `/${includeDashboardUrl(URLs.Subscriptions)}`,
                element: <Outlet />,
                children: [
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
                element: <ResourcePage  />,
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
                    element: <ResourcePage />,
                  },
                  {
                    path: URLs.Rates_International,
                    element: <ResourcePage  />,
                  },
                  {
                    path: URLs.Rates_National,
                    element: <AdminProducts commentId="" />,
                  },
                  {
                    path: URLs.Rates_Roaming,
                    element: <AdminProducts commentId="" />,
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
