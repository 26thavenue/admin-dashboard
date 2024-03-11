import React from "react";
import { FormProvider, useForm, useFormContext, Controller } from "react-hook-form";
import { AddCreditPlan } from "./AddCreditCard";
import { Button, Form, FormInput } from "@/app/sharedcomponents/form";
import CustomCheckbox from "@/app/sharedcomponents/customerCheckbox";

function OrderDetails() {
  const {
    control,
    formState: { isValid },
  } = useFormContext();
  return (
    <>
      <AddCreditPlan control={control} />
      <VerifyPersonalDetails>
        <div className="flex gap-2 justify-between items-stretch mt-8 font-light text-black max-md:flex-wrap max-md:max-w-full">
          <Controller
            name="billing"
            control={control}
            defaultValue={"off"}
            render={({ field }) => (
              <CustomCheckbox
                {...field}
                label={"  My Billing Address and Shipping Address are the same"}
              />
            )}
          />
        </div>
        <Button className="text-[16px]" disabled={!isValid}>
          Proceed
        </Button>
      </VerifyPersonalDetails>
    </>
  );
}

export default OrderDetails;

function VerifyPersonalDetails({ children }: { children: React.ReactNode }) {
  const formMethods = useForm({
    mode: "all",
  });
  const {
    watch,
    handleSubmit: handleSubmit2,
    formState: { isValid },
  } = formMethods;

  console.log(watch());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log({ data });
  };
  return (
    <div className="flex flex-col justify-end items-stretch px-7 pb-10 mt-8 text-xl leading-7 bg-pink-50 rounded-xl text-zinc-600 max-md:px-5 max-md:max-w-full">
      <FormProvider {...formMethods}>
        <Form key={2} onSubmit={handleSubmit2(onSubmit)}>
          <FormInput
            name="email"
            title="Your Details"
            placeholder="e.g Johndoe@example.com"
            type="text"
            autoFocus={true}
          />
          <FormInput
            name="numeric"
            title="Shipping Address"
            placeholder="Enter Post Code"
            type="text"
          />
          <Button className="text-[16px]" disabled={!isValid}>
            Verify Code
          </Button>
        </Form>
      </FormProvider>
      {children}
    </div>
  );
}
