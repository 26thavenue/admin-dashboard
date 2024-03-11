import AuthTemplate from "./template";
import { FormInput, Form, Button } from "../sharedcomponents/form";
import { Link } from "react-router-dom";
import { URLs } from "../../utils/enums";
import { FormProvider, useForm } from "react-hook-form";
import { Regex } from "../../utils/regex";
import { useRef } from "react";

function Signup() {
  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    watch,
    formState: { isValid },
  } = formMethods;
  const password = useRef({});
  password.current = watch("password", "");
  return (
    <AuthTemplate
      title="Get Started on Talk4"
      altText="Sign up on Talk 4, complete the details below to get started"
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(() => console.log("submitted"))}>
          <FormInput
            name="first_name"
            placeholder="e.g John"
            title="First Name"
          />
          <FormInput name="last_name" placeholder="e.g Doe" title="Last Name" />
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
          <FormInput
            name="password"
            title="Password"
            placeholder="e.g. Johndo2112_₦"
            type="password"
            autoComplete="current-password"
            hasPassword={true}
            moreRegister={{
              pattern: {
                value: Regex.password.pattern,
                message: Regex.password.message,
              },
            }}
          />
          <FormInput
            type="password"
            hasPassword={true}
            name="confirm_password"
            placeholder="e.g e.g. Johndo2112_₦"
            title="Confirm Password"
            moreRegister={{
              validate: (value: string) =>
                value === password.current ||
                "Entered an inconsistent password",
            }}
          />
          <Button disabled={!isValid}>Create Account</Button>
          <p className="text-black text-[1rem] font-light text-center">
            Already have an account?{" "}
            <Link
              className="text-blue font-normal cursor-pointer"
              to={`/${URLs?.Login}`}
            >
              Login
            </Link>
          </p>
        </Form>
      </FormProvider>
    </AuthTemplate>
  );
}

export default Signup;
