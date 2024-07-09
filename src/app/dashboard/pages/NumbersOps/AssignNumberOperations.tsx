import {
  Button,
  Form,
  FormInput,
  FormSelect,
} from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useCreateSimMutation } from "@/utils/redux/reducers/operations.reducers";
import { useSelector } from "react-redux";
import { operationsSelector } from "@/utils/redux/slices/operation.slice";
import { useParams } from "react-router-dom";
import useBlockReload from "@/utils/hooks/useBlockReload";
import { Notify } from "@/utils/resources/toast";
import { Regex } from "@/utils/regex";

export type TNumberOperations = {
  serialNumber: string;
  simNumber: string;
  emailAddress: string;
  network: number;
  id: number;
  simId: number;
};

export type TNumbDetails = {
  emailAddress: string;
  network: number;
};

function AssignNumberOperations() {
  const params = useParams();

  return (
    <DBHomeTemplate
      name="Number Operations"
      supportText="Manage how phone numbers are allocated and managed."
      backUrl="/dashboard/numbers_ops"
    >
      <div className="rounded-[12px] flex flex-row w-[100%] gap-4">
        <div className="bg-white p-6 rounded-[12px] w-[100%]">
          <h4 className="font-medium">
            Customer Details and Shipping Information
          </h4>
          <div className="mt-8 flex gap-4 flex-col">
            <div className="flex flex-row ">
              <div className=" w-[100%]">
                <small>First Name</small>
                <p>John</p>
              </div>
              <div className="w-[100%]">
                <small>Last Name</small>
                <p>Doe</p>
              </div>
            </div>
            <div>
              <small>Email Address</small>
              <p>{params?.emailAddress}</p>
            </div>
            <div>
              <small>Billing Address</small>
              <p>123 Main St, Anytown USA</p>
              <p>123 Main St, Anytown USA</p>
              <p>123 Main St, Anytown USA</p>
            </div>
            <div>
              <small>Shipping Address</small>
              <p>123 Main St, Anytown USA</p>
              <p>123 Main St, Anytown USA</p>
              <p>123 Main St, Anytown USA</p>
            </div>
            <br />
            <small>First Name has X SIMs with Talk4 Mobile.</small>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[12px] w-[100%]">
          <h4 className="font-medium">Assign Number to SIM Card</h4>
          <AssignNumber />
        </div>
      </div>
    </DBHomeTemplate>
  );
}

export default AssignNumberOperations;

function AssignNumber() {
  useBlockReload();
  const [createSimCard, { isLoading: loading }] = useCreateSimMutation();
  const num_ops = useSelector(operationsSelector);
  console.log({ num_ops });
  const params = useParams();
  const formMethods = useForm<TNumberOperations>({
    mode: "all",
    defaultValues: {
      ...num_ops?.number_ops,
      ...params,
      simNumber: num_ops?.number_ops.mobileNumber,
      simId: num_ops?.number_ops?.id,
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = formMethods;

  const submit: SubmitHandler<TNumberOperations> = async (data) => {
    const response = await createSimCard({
      ...data,
      network: Number(data?.network),
    });

    if ("data" in response) {
      if ("message" in response.data) {
        Notify().showSuccessNotification(response.data.message);
        reset();
      }
    }

    if ("error" in response) {
      Notify().showErrorNotification(
        "An error occured. Contact your system Administrator or Developer."
      );
    }
  };

  return (
    <FormProvider {...formMethods}>
      <Form
        className="flex flex-col gap-4 mt-2"
        onSubmit={handleSubmit(submit)}
      >
        <FormInput
          moreRegister={{
            pattern: {
              value: Regex.email.pattern,
              message: Regex.email.message,
            },
          }}
          name="emailAddress"
          title="Email"
          type="email"
        />
        <FormSelect name="network" title="Network" type="numeric">
          <option value={1}>O2</option>
          <option value={2}>Vodafone</option>
          <option value={3}>EE</option>
        </FormSelect>
        <FormInput
          moreRegister={{
            pattern: {
              value: Regex.numbers.pattern,
              message: Regex.numbers.message,
            },
          }}
          name="serialNumber"
          title="Serial Number"
          type="text"
        />
        <FormInput
          moreRegister={{
            pattern: {
              value: Regex.phone.pattern,
              message: Regex.phone.message,
            },
          }}
          name="simNumber"
          title="SIM Number"
          type="numeric"
        />
        <Button disabled={!isValid || loading} loading={loading}>
          Confirm
        </Button>
      </Form>
    </FormProvider>
  );
}
