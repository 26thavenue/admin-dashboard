import {
  Button,
  Form,
  FormInput,
  FormSelect,
} from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateSimMutation,
  useFetchPendingSimsDetailsQuery,
} from "@/utils/redux/reducers/operations.reducers";
import { useSelector } from "react-redux";
import { operationsSelector } from "@/utils/redux/slices/operation.slice";
import { useNavigate, useParams } from "react-router-dom";
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
  const {
    data,
    isLoading: loading,
    error,
    refetch: refetchRecords,
  } = useFetchPendingSimsDetailsQuery({
    id: params.id,
  });

  const user = data?.result?.results[0];

  console.log({ data });

  if (loading) {
    return <p>Loading Records...</p>;
  }

  if (error) {
    return (
      <p>
        An error occurred while loading record.{" "}
        <span
          className="cursor-pointer text-blue"
          onClick={() => refetchRecords()}
        >
          Refresh
        </span>{" "}
        and try again.
      </p>
    );
  }

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
                <p>{user?.firstName || "Jane"}</p>
              </div>
              <div className="w-[100%]">
                <small>Last Name</small>
                <p>{user?.lastName || "Doe"}</p>
              </div>
            </div>
            <div>
              <small>Email Address</small>
              <p>{user?.emailAddress}</p>
            </div>
            {user?.addresses?.map(
              (address: Record<string, string | boolean>, index: number) => {
                return (
                  <div key={index}>
                    <small>
                      {address?.isBilling === true
                        ? "Billing Address"
                        : "Shipping Address"}
                    </small>
                    <p>{address?.line1}</p>
                    <p>{address?.line2}</p>
                    <p>
                      {address?.city}, {address?.state}
                    </p>
                    <p>{address?.country}</p>
                    <p>{address?.postalCode}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        {user?.simStatus === -1 && (
          <div className="bg-white p-6 rounded-[12px] w-[100%]">
            <h4 className="font-medium">Assign Number to SIM Card</h4>
            {user && <AssignNumber user={user} />}
          </div>
        )}
      </div>
    </DBHomeTemplate>
  );
}

export default AssignNumberOperations;

function AssignNumber({
  user,
}: {
  user: Record<string, string | boolean | number>;
}) {
  useBlockReload();
  const [createSimCard, { isLoading: loading }] = useCreateSimMutation();
  const num_ops = useSelector(operationsSelector);
  const navigate = useNavigate();
  console.log({ num_ops, user });
  const params = useParams();
  const formMethods = useForm<TNumberOperations>({
    mode: "all",
    defaultValues: {
      emailAddress: user?.emailAddress as string,
      network: user?.network as number,
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
      simId: params?.id,
    });

    if ("data" in response) {
      if ("message" in response.data) {
        Notify().showSuccessNotification(
          `${response.data.message}. An email notification which contains the SIM details has been sent to ${user.emailAddress}.`
        );
        navigate("/dashboard/numbers_ops");
        reset();
      }
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
