import { FormProvider, useForm } from "react-hook-form";
import { FormInput, Form, Button } from "../sharedcomponents/form";
import AuthTemplate from "./template";
import { Regex } from "../../utils/regex";
import { useRef } from "react";

function ResetPassword() {
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
      title="Create Password!"
      altText="Complete form with preferred password to continue"
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(() => console.log("submitted"))}>
          <FormInput
            name="password"
            title="Password"
            placeholder="e.g. Johndo2112_₦"
            type="password"
            hasPassword={true}
            moreRegister={{
              pattern: {
                value: Regex.password.pattern,
                message: Regex.password.message,
              },
            }}
          />
          <FormInput
            name="confirm_password"
            title="Confirm Password"
            placeholder="e.g. Johndo2112_₦"
            type="password"
            moreRegister={{
              validate: (value: string) =>
                value === password.current ||
                "Entered an inconsistent password",
            }}
          />
          <Button disabled={!isValid}>Create Password</Button>
        </Form>
      </FormProvider>
    </AuthTemplate>
  );
}

export default ResetPassword;
