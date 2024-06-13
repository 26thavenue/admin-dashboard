import { FormProvider, useForm } from "react-hook-form";
import DBHomeTemplate from "../template";
import { Form, FormInput, Button, FormSelect } from "@/app/sharedcomponents/form";
import FormTextfield from "@/app/sharedcomponents/form/textfield";

function AdminCreateProducts() {
  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  return (
    <DBHomeTemplate name="Create Product" supportText="Create New Product">
      <div className="bg-white p-6 rounded-[12px]">
        <FormProvider {...formMethods}>
          <Form onSubmit={handleSubmit(() => alert("clicked"))}>
            <p className="font-medium">Product Details</p>
            <div>
              <div className="grid grid-cols-3 gap-3 gap-y-6 mb-3">
                <FormInput name="currency" title="Currency" type="text" />
                <FormInput name="name" title="Name" type="text" />
                <FormInput name="imageUrl" title="Image URL" type="text" />
              </div>
              <FormTextfield
                name="description"
                title="Description"
                type="text"
              />
            </div>
            <p className="font-medium">Network and Pricing Details</p>
            <div>
              <div className="grid grid-cols-3 gap-3 gap-y-6 mb-3">
                <FormSelect name="network" title="Network" type="numeric">
                  <option value={1}>O2</option>
                  <option value={2}>Vodafone</option>
                  <option value={3}>EE</option>
                </FormSelect>
                <FormInput name="sellPrice" title="Sell Price" type="text" />
                <FormInput name="sku" title="SKU" type="text" />
                <FormInput name="interval" title="Interval" type="text" />
              </div>
            </div>
            <p className="font-medium">Product Features</p>
            <div>
              <div className="grid grid-cols-3 gap-3 gap-y-6 mb-3">
                <FormInput name="tarrifType" title="Tariff Type" type="text" />
                {/* <FormInput name="description" title="Description" type="text" /> */}
                <FormInput
                  name="ukVoiceAndSms"
                  title="UK Voice and SMS"
                  type="text"
                />
                <FormInput
                  name="ukeuMinutesAndSms"
                  title="UK EU Minutes and SMS"
                  type="text"
                />
                <FormInput name="data" title="Data" type="text" />
                <FormInput
                  name="dataOptions"
                  title="Data Options"
                  type="text"
                />
                <FormInput
                  name="wtsCompatible"
                  title="WTS Compatible"
                  // type="select"
                />
                <FormInput
                  name="tftpCompatible"
                  title="TFTP Compatible"
                  // type="select"
                />
                <FormInput name="isCustom" title="Is Custom" type="text" />
              </div>
            </div>
            <div className="flex gap-4 justify-end">
              <Button variant={"secondary"} disabled={!isValid}>
                Cancel
              </Button>
              <Button disabled={!isValid}>Create Product</Button>
            </div>
          </Form>
        </FormProvider>
      </div>
    </DBHomeTemplate>
  );
}

export default AdminCreateProducts;
