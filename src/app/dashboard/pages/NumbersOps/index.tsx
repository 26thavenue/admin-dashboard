import {
  Button,
  Form,
  FormInput,
  FormSelect,
} from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
// import DBTable from "./DBTable";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useCreateSimMutation } from "@/utils/redux/reducers/operations.reducers";
import GlobalModal from "@/app/sharedcomponents/modals/GlobalModal";

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
      {/* <div className="bg-white p-6 rounded-[12px]">
        <DBTable />
      </div> */}
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
    const response = await createSimCard({
      ...data,
      network: Number(data?.network),
    });

    if ("error" in response) return;
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="ml-auto block">
        Assign SIM Card
      </Button>

      <GlobalModal
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

                <FormSelect name="network" title="Network" type="numeric">
                  <option value={1}>O2</option>
                  <option value={2}>Vodafone</option>
                  <option value={3}>EE</option>
                </FormSelect>
              </div>
              <Button disabled={!isValid || loading} loading={loading}>
                Confirm
              </Button>
            </>
          </Form>
        </FormProvider>
      </GlobalModal>
    </>
  );
}
