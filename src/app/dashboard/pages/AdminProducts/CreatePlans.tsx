import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DBHomeTemplate from "../template";
import {
  Form,
  FormInput,
  Button,
  FormSelect,
} from "@/app/sharedcomponents/form";
import FormTextfield from "@/app/sharedcomponents/form/textfield";
import { useCreatePlansMutation } from "@/utils/redux/reducers/products.reducers";
import { useNavigate, useParams } from "react-router-dom";
import { Notify } from "@/utils/resources/toast";

interface FormData {
  currency: string;
  name: string;
  imageUrl: string;
  description: string;
  network: number;
  sellPrice: number;
  sku: string;
  interval: number;
  tarrifType: number;
  ukVoiceAndSms: string;
  ukeuMinutesAndSms: string;
  data: string;
  dataOptions: string;
  wtsCompatible: string;
  tftpCompatible: string;
  isCustom: string;
  dataAmount: string;
  voiceAndSmsAmount: string
}

function AdminCreatePlans() {
  const [createPlan, { isLoading: creating }] = useCreatePlansMutation();
  const navigate = useNavigate();
  const params = useParams();
  const formMethods = useForm<FormData>({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const submit: SubmitHandler<FormData> = async (data) => {
    const payload = {
      ...data,
      network: Number(data?.network),
      tarrifType: Number(data?.tarrifType),
      sellPrice: Number(data?.sellPrice),
      interval: Number(data?.interval),
      isCustom: Boolean(data?.isCustom),
      product_sku: params?.id,
      hasData: data?.dataAmount ? "data" : "",
      hasVoiceSms: data?.voiceAndSmsAmount ? "voiceandsms" : ""
    };

    const response = await createPlan(payload);

    if ("data" in response) {
      if ("message" in response.data && response?.data?.message === "OK") {
        navigate("../");
        Notify().showSuccessNotification(response?.data?.message || "Plan Created Successfully")
      }
    }

  };


  
  return (
    <DBHomeTemplate
      name={`Create A Plan for ${params?.name || "Your Product"}`}
      supportText="Create New Plan"
    >
      <div className="bg-white p-6 rounded-[12px]">
        <FormProvider {...formMethods}>
          <Form onSubmit={handleSubmit(submit)}>
            <p className="font-medium">Plans Details</p>
            <div>
              <div className="grid grid-cols-3 gap-3 gap-y-6 mb-3">
                {/* <FormInput name="currency" title="Currency" type="text" /> */}
                <FormSelect name="currency" title="Currency" type="text">
                  <option value={"GBP"}>GBP</option>
                  <option value={"USD"}>USD</option>
                </FormSelect>
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
                {/* <FormSelect name="network" title="Network" type="numeric">
                  <option value={1}>O2</option>
                  <option value={2}>Vodafone</option>
                  <option value={3}>EE</option>
                </FormSelect> */}

                <FormInput name="sku" title="SKU" type="text" />
                <FormSelect name="interval" title="Interval" type="text">
                  <option value={1}>Monthly</option>
                  <option value={2}>Yearly</option>
                </FormSelect>
              </div>
            </div>
            <p className="font-medium">Product Features</p>
            <div>
              <div className="grid grid-cols-3 gap-3 gap-y-6 mb-3">
                <FormInput
                  name="sellPrice"
                  title="Sell Price"
                  type="number"
                  step="0.01"
                  min={0}
                />
                <FormInput
                  name="dataAmount"
                  title="Data Amount"
                  type="text"
                  moreRegister={{
                    pattern: {
                      value: /\bUnlimited\b|\b\d+\b/,
                      message:
                        "Enter 'Unlimited' for unlimited data plan, or whole numbers for Gigabyte",
                    },
                  }}
                  // step="0.01"
                  // min={0}
                />
                <FormInput
                  name="voiceAndSmsAmount"
                  title="Voice and SMS Amount"
                  type="text"
                  moreRegister={{
                    pattern: {
                      value: /\bUnlimited\b|\b\d+\b/,
                      message:
                        "Enter 'Unlimited' for unlimited Voice and SMS plan, or whole numbers for minutes",
                    },
                  }}
                />
                {/* <FormInput
                  name="sellPrice"
                  title="Sell Price"
                  type="number"
                  step="0.01"
                  // min={0}
                />{" "} */}
                {/* <FormInput
                  name="sellPrice"
                  title="Sell Price"
                  type="number"
                  step="0.01"
                  min={0}
                />
                <FormSelect
                  name="tarrifType"
                  title="Tariff Type"
                  type="numeric"
                >
                  <option value={1}>Item 1</option>
                  <option value={2}>Item 2</option>
                </FormSelect>
                <FormSelect
                  name="ukVoiceAndSms"
                  title="UK Voice and SMS"
                  type="text"
                >
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </FormSelect>
                <FormSelect
                  name="ukeuMinutesAndSms"
                  title="UK EU Minutes and SMS"
                  type="text"
                >
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </FormSelect>
                <FormSelect name="data" title="Data" type="text">
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </FormSelect>
                <FormSelect name="dataOptions" title="Data Options" type="text">
                  <option value={"Unlimited"}>Unlimited</option>
                </FormSelect>
                <FormSelect
                  name="wtsCompatible"
                  title="WTS Compatible"
                  type="text"
                >
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </FormSelect>
                <FormSelect
                  name="tftpCompatible"
                  title="TFTP Compatible"
                  type="text"
                >
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </FormSelect>
                <FormSelect name="isCustom" title="Is Custom" type="text">
                  <option value={"true"}>True</option>
                  <option value={"false"}>False</option>
                </FormSelect> */}
              </div>
            </div>
            <div className="flex gap-4 justify-end">
              <Button variant={"secondary"} disabled={!isValid}>
                Cancel
              </Button>
              <Button loading={creating} disabled={!isValid || creating}>
                Create Plan
              </Button>
            </div>
          </Form>
        </FormProvider>
      </div>
    </DBHomeTemplate>
  );
}

export default AdminCreatePlans;
