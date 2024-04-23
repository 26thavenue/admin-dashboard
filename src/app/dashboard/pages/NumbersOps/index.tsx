import { Button, Form, FormInput } from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import DBTable from "./DBTable";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TopUpModal from "../TopUp/TopUpModal";
import { useCreateSimMutation } from "@/utils/redux/reducers/operations.reducers";

export type TNumberOperations = {
  serialNumber: string;
  simNumber: string;
  emailAddress: string;
  network: number;
};

function NumbersOperations() {
  return (
    <DBHomeTemplate
      name="Number Operations"
      supportText="Manage how phone numbers are allocated and managed."
    >
      <div>
        <AddStaffAdmin />
      </div>
      <div className="bg-white p-6 rounded-[12px]">
        <DBTable />
      </div>
    </DBHomeTemplate>
  );
}

export default NumbersOperations;

function AddStaffAdmin() {
  const [createSimCard, { isLoading: loading }] = useCreateSimMutation();
  const [isOpen, setIsOpen] = useState(false);
  const formMethods = useForm<TNumberOperations>({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const submit: SubmitHandler<TNumberOperations> = async (data) => {
    await createSimCard({ ...data, network: Number(data?.network) });
  };
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="ml-auto block">
        Assign SIM Card
      </Button>
      <TopUpModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={"Assign SIM Card"}
        description={"Fill the fields below to Get Started"}
      >
        <FormProvider {...formMethods}>
          <Form onSubmit={handleSubmit(submit)}>
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <FormInput
                  name="serialNumber"
                  title="Serial Number"
                  type="text"
                />
                <FormInput name="simNumber" title="SIM Number" type="numeric" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <FormInput name="emailAddress" title="Email" type="email" />
                <FormInput name="network" title="Network" type="numeric" />
              </div>
              <Button disabled={!isValid || loading} loading={loading}>
                Confirm
              </Button>
            </>
          </Form>
        </FormProvider>
      </TopUpModal>
    </>
  );
}
