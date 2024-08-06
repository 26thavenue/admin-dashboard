import { Link, useNavigate } from "react-router-dom";
import { FormInput, Form, Button } from "../sharedcomponents/form";
import AuthTemplate from "./template";
import { URLs } from "../../utils/enums/url.enums";
import { FormProvider, useForm } from "react-hook-form";
import { Regex } from "../../utils/regex";
import { useAdminLoginMutation } from "../../utils/redux/reducers/new.reducers";
import { useDispatch } from 'react-redux';
import { setToken } from '../../utils/redux/slices/new.slice';
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const formMethods = useForm<LoginFormData>({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await adminLogin(data).unwrap();
      dispatch(setToken(result.accessToken));
      navigate(URLs.Dashboard); // Redirect to dashboard after successful login
    } catch (err) {
      if (err && typeof err === 'object' && 'data' in err) {
        setErrorMessage((err as any).data?.message || 'An error occurred during login');
      } else {
        setErrorMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <AuthTemplate
      title="Admin Portal"
      altText="Complete the details below to login to the admin portal"
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button disabled={!isValid || isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
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