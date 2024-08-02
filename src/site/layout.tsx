// import { Link } from "react-router-dom";
import "@/App.css";
// import { URLs } from "@/utils/enums";
import Footer from "@/landing/components/footer";
import Header from "@/landing/components/header";
import OrderBanner from "@/landing/components/commons/order";
import React from "react";
import ScrollToTop from "@/landing/components/utilities/ScrollToTop";

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black">
      <ScrollToTop />
      <Header />
      {/* <div className="grid place-items-center gap-4 p-10 text-center">
        <img
       
        />
        <p className="text-brand">Welcome To The Talk4 Telcomms Project</p>
        <h1 className="text-3xl">Project Under Development</h1>
        <p className="text-blue">Landing Page Stays Here</p>
        <p>
          <b>-</b>
        </p>
        <p>
          <b>Useful Links</b>
        </p>
        <div className="flex flex-row flex-wrap gap-4 justify-center text-center">
          <Link className="hover:text-blue font-bold" to={URLs.Home}>
            Home
          </Link>
          <Link className="hover:text-blue" to={URLs.Product_Plans}>
            Plans
          </Link>
          <Link
            className="hover:text-blue"
            to={`${URLs.Product_Plans}/${URLs.Product_Plans_PaygA}`}
          >
            Plan - PayG
          </Link>
          <Link
            className="hover:text-blue"
            to={`${URLs.Product_Plans}/${URLs.Product_Plans_TalkLonger}`}
          >
            Plan - Talk Longer
          </Link>
          <Link
            className="hover:text-blue"
            to={`${URLs.Product_Plans}/${URLs.Product_Plans_DataOnly}`}
          >
            Plan - Data Only
          </Link>
          <Link className="hover:text-blue" to={URLs.Order_Sim}>
            Order Sim
          </Link>
          <Link className="hover:text-blue" to={URLs.Why_Talk4}>
            Why Talk4
          </Link>
          <Link
            className="hover:text-blue"
            to={`${URLs.Why_Talk4}/${URLs.Why_Talk4_Us}`}
          >
            Why Talk4 - Us
          </Link>
          <Link
            className="hover:text-blue"
            to={`${URLs.Why_Talk4}/${URLs.Why_Talk4_Transfer}`}
          >
            Why Talk4 - Transfer
          </Link>
          {/* <Link className="hover:text-blue" to={URLs.ChangePassword}>
            Change Password
          </Link>
          <Link className="hover:text-blue" to={URLs.ReesetPassword}>
            Reset Password
          </Link> 
          <Link className="hover:text-blue" to={URLs.Dashboard}>
            Dashboard
          </Link>
          <Link className="hover:text-blue" to={URLs.Login}>
            Login
          </Link>
          <Link className="hover:text-blue" to={URLs.SignUp}>
            Register
          </Link>
          <Link className="hover:text-blue" to={URLs.ChangePassword}>
            Forgot Password
          </Link>
          <Link className="hover:text-blue" to={URLs.ChangePassword}>
            Change Password
          </Link>
          <Link className="hover:text-blue" to={URLs.ReesetPassword}>
            Reset Password
          </Link>
          <Link className="hover:text-blue" to={URLs.Dashboard}>
            Dashboard
          </Link>
        </div>
        <p>
          <b>-</b>
        </p>
        Header
      </div> */}
      {children}
      <OrderBanner />
      <Footer />
    </div>
  );
}

export default SiteLayout;
