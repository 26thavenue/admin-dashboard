import { Button, Form, FormInput } from "@/app/sharedcomponents/form";
import FormTextfield from "@/app/sharedcomponents/form/textfield";
import { Images } from "@/assets/images";
import { Regex } from "@/utils/regex";
import { FormProvider, useForm } from "react-hook-form";

function HelpForm() {
  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  return (
    <div className="p-4">
      <div className="flex bg-white -mt-32 lg:max-w-6xl w-[100%] min-h-[400px] shadow-xl mx-auto my-12 rounded-2xl flex-auto overflow-hidden">
        <div className="w-[auto] hidden sm:hidden lg:block  p-0 relative">
          <img src={Images.BusinessMan} alt="Businessman - Contact Us" />
          {/* <img src={Logos.Everyone.Mobile.img} alt={Logos.Everyone.Mobile.alt} />

        <div className="w-[95%]">
          <h3 className="mt-4  text-[2rem] text-white font-extrabold">
            Say Goodbye to <br /> Annual Price Hikes
          </h3>
          <p className="text-white text-[1.2rem] font-light">
            Keep your phone bill low & experience 5G at no additional cost for
            the entire year.
          </p>
        </div>

        <img className="absolute top-12 right-12" src={Dots} alt="" />
        <img className="mt-12" src={Dots} alt="" />
        <img
          className="w-[32%] h-auto absolute bottom-0 right-0"
          src={Waves}
          alt=""
        />

        <img
          className="w-[68%] h-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 "
          src={Caller}
          alt={"caller"}
        /> */}
        </div>
        <div className="w-full sm:w-[100%] lg:w-1/2 bg-white pb-6 pt-4 px-6 md:pb-6 md:pt-4 md:px-16  lg:pb-12 lg:pt-12 lg:px-24 overflow">
          <div className="">
            <h3 className="mt-2 text-left text-[1.95rem] text-black font-bold relative">
              Send us a message
            </h3>

            <p className="text-left text-black font-light">
              Fill in the details below to send us a message
            </p>

            <FormProvider {...formMethods}>
              <Form
              className="g-6"
                onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
              >
                <FormInput
                  name="first_name"
                  placeholder="e.g John"
                  title="Full Name"
                />
                <FormInput
                  name="email"
                  title="Email Address"
                  placeholder="e.g Johndoe@example.com"
                  type="email"
                  autoFocus={true}
                  moreRegister={{
                    pattern: {
                      value: Regex.email.pattern,
                      message: Regex.email.message,
                    },
                  }}
                />
                <FormInput
                  name="phone"
                  placeholder="e.g 4489393049"
                  title="Phone Number"
                  type="tel"
                  moreRegister={{
                    pattern: {
                      value: Regex.phone.pattern,
                      message: Regex.phone.message,
                    },
                  }}
                />
                <FormTextfield
                  name="message"
                  placeholder="e.g 4489393049"
                  title="Message"
                  rows={3}
                />
                <Button disabled={!isValid}>Submit</Button>
              </Form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpForm;
