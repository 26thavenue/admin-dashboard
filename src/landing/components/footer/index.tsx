import {
  BsTwitterX,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

function Footer() {
  const date = new Date();
  return (
    <footer className="bg-brand p-6 lg:p-[unset] h-auto lg:h-[300px] relative">
      <div className="max-w-6xl mx-auto my-0 h-[inherit] text-white font-normal text-[14px]">
        <div className="min-w-full mb-10 grid grid-cols-1 lg:grid-cols-6 gap-8 py-10">
          <div className="col-span-2 text-center lg:text-left">
            <img
              src={""}
              alt={"logo"}
              className="mb-4 block my-0 mx-auto lg:mx-[unset]"
            />
            <p className="">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="font-bold mb-1">Join</h3>
            <ul className="list-none gap-1 flex flex-col">
              <li>Order Free SIM</li>
              <li>Port In</li>
              <li>Why Talk4 Mobile</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="font-bold mb-1">Explore</h3>
            <ul className="list-none gap-1 flex flex-col">
              <li>Monthly Plans</li>
              <li>PAYG Plans</li>
              <li>Data-Only Plans</li>
              <li>International Plans</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="font-bold mb-1">MyTalk4Mobile</h3>
            <ul className="list-none gap-1 flex flex-col">
              <li>Register</li>
              <li>Login</li>
              <li>Top-up</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="font-bold mb-1">Help & Support</h3>
            <ul className="list-none gap-1 flex flex-col">
              <li>111 from Talk4</li>
              <li>0207 87 784893</li>
              <li>Hello@talk4mobile.co.uk</li>
            </ul>
          </div>
        </div>
        <div className="text-red flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between">
          <p>(c) {date?.getFullYear()} Talk4 Mobile. All rights reserved.</p>
          <div className="flex gap-4 text-xl">
            <BsTwitterX className="cursor-pointer" />
            <BsFacebook className="cursor-pointer" />
            <BsLinkedin className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
