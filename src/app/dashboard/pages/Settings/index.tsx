import DBHomeTemplate from "../template";
import { useState } from "react";
import { Button, Form, FormInput } from "../../../sharedcomponents/form";
import { DBImages } from "../DBHome/DBImageImports";

function Settings() {
  const [modalFlip] = useState(true);
  return (
    <DBHomeTemplate
      name="Your Order Summary"
      supportText="Welcome Bank to Talk4 Mobile"
    >
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-4">
        <div className="order-2 col-span-5 sm:col-span-3 rounded-[6px]  flex flex-col gap-4 ">
          <div className="bg-white py-6 px-4 rounded-[6px]">
            {" "}
            <h3 className="text-[18px] font-medium">Personal Information</h3>
            <p>Pay with paypal and enter your details</p>
            <Form>
              {modalFlip && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  <FormInput
                    name="first_name"
                    placeholder="e.g John"
                    title="First Name"
                  />
                  <FormInput
                    name="last_name"
                    placeholder="e.g Doe"
                    title="Last Name"
                  />
                  <FormInput
                    name="email_address"
                    placeholder="e.g johndoe@gmail.com"
                    title="Email Address"
                    type="email"
                  />
                  <FormInput
                    name="phone"
                    placeholder="e.g 4489393049"
                    title="Phone Number"
                    type="tel"
                  />
                  <Button>Save</Button>
                </div>
              )}
            </Form>
          </div>
          <div className="bg-white py-6 px-4 rounded-[6px]">
            {" "}
            <h3 className="text-[18px] font-medium">Account Password</h3>
            <p>Pay with paypal and enter your details</p>
            <Form>
              {modalFlip && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="e.g e.g. Johndo2112_₦"
                    title="Old Password"
                  />
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="e.g e.g. Johndo2112_₦"
                    title="Create New Password"
                  />
                  <FormInput
                    type="password"
                    name="confirm_password"
                    placeholder="e.g e.g. Johndo2112_₦"
                    title="Confirm New Password"
                  />
                  <div></div>
                  <Button>Save</Button>
                </div>
              )}
            </Form>
          </div>
        </div>

        <div className="order-1 col-span-5 sm:col-span-2">
          <div className="bg-white rounded-[6px] h-[352px] relative">
            <div className="bg-[#FFE8F2] h-1/2 rounded-t-[6px]">
              <span className="sr-only">Holder</span>
            </div>
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={DBImages.Person}
              alt={"Person"}
            />
          </div>
        </div>
      </div>
    </DBHomeTemplate>
  );
}

export default Settings;
