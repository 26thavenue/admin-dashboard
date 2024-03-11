import { Link } from "react-router-dom";
import { FormInput, Form, Button } from "../sharedcomponents/form";
import AuthTemplate from "./template";
import { URLs } from "../../utils/enums/url.enums";
import { FormProvider, useForm } from "react-hook-form";
import { Regex } from "../../utils/regex";

function MailForm() {
  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;
  return (
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
        <Button disabled={!isValid}>Change Password</Button>
        <p className="text-black text-[1rem] font-light text-center">
          <Link
            className="text-blue font-normal cursor-pointer"
            to={`/${URLs?.Login}`}
          >
            Login
          </Link>{" "}
          Instead
        </p>
      </Form>
    </FormProvider>
  );
}

function MailFormSuccess() {
  return <Form>""</Form>;
}

function ChangePassword() {
  const newPassword = "true";

  let display;
  let title;
  let altText;

  switch (newPassword) {
    case "true":
      title = "Change Password!";
      altText = "Complete the details below to change password";
      display = <MailForm />;
      break;

    default:
      title = "Email Sent!";
      altText = "Check Mailbox to Complete this Step";
      display = <MailFormSuccess />;
      break;
  }

  return (
    <AuthTemplate title={title} altText={altText}>
      {display}
    </AuthTemplate>
  );
}

export default ChangePassword;
