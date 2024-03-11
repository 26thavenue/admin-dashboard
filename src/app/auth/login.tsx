import { Link } from "react-router-dom";
import { FormInput, Form, Button } from "../sharedcomponents/form";
import AuthTemplate from "./template";
import { URLs } from "../../utils/enums/url.enums";
import { FormProvider, useForm } from "react-hook-form";
import { Regex } from "../../utils/regex";

//Login


function Login() {
  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  return (
    <AuthTemplate
      title="Watch Tower"
      altText="Complete the details below to login to the admin portal"
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(() => console.log("submitted"))}>
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
          <p className="text-black text-[1rem] font-light text-right">
            Forgot Password?{" "}
            <Link
              className="text-blue font-normal cursor-pointer"
              to={`/${URLs?.ChangePassword}`}
            >
              Reset Now
            </Link>
          </p>
          <Button disabled={!isValid}>Login</Button>
          <p className="text-black text-[1rem] font-light text-center">
            Don't have an account?{" "}
            <Link
              className="text-blue font-normal cursor-pointer"
              to={`/${URLs?.SignUp}`}
            >
              Contact Admin
            </Link>
          </p>
          <p className="text-black text-[1rem] font-light text-center">
            Useful Links{" "}
            <Link
              className="text-blue font-normal cursor-pointer"
              to={`/${URLs?.ReesetPassword}`}
            >
              Create New Admin Password
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue font-normal cursor-pointer"
              to={`/${URLs?.Dashboard}`}
            >
              Dashboard
            </Link>
          </p>
        </Form>
      </FormProvider>
    </AuthTemplate>
  );
}

export default Login;
