import { Button, Form, FormInput } from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import DBTable from "./DBTable";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TopUpModal from "../TopUp/TopUpModal";

function AdminProducts() {
  return (
    <DBHomeTemplate
      name="Access Control"
      supportText="Manage how staff manage this watchtower"
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

export default AdminProducts;

function AddStaffAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="ml-auto block">
        Add Staff Admin
      </Button>
      <TopUpModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={"Add Staff Admin"}
        description={"Fill the fields below to Get Started"}
      >
        <FormProvider {...formMethods}>
          <Form onSubmit={handleSubmit(() => console.log("submitted"))}>
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <FormInput name="card_numbere" title="First Name" type="text" />
                <FormInput name="card_named" title="Last Name" type="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <FormInput
                  name="card_numbery"
                  title="Email Address"
                  type="email"
                />
                <FormInput
                  name="card_namea"
                  title="Phone Number"
                  type="numeric"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <FormInput
                  name="card_numberz"
                  title="Department"
                  type="email"
                />
                <FormInput
                  name="card_namde"
                  title="Role"
                  type="numeric"
                />
              </div>
              <Button disabled={!isValid} onClick={() => setIsOpen(!isOpen)}>
                Confirm
              </Button>
            </>
          </Form>
        </FormProvider>
      </TopUpModal>
    </>
  );
}
