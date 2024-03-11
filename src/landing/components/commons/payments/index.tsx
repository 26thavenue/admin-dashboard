import { FormProvider, useForm } from "react-hook-form";
import { Images } from "../../../../assets/images";
import { Form } from "../../../../app/sharedcomponents/form";
import AlmostDoneCardDetails from "./AlmostDone/index";
import Stepper from "./Stepper";
import OrderDetails from "./OrderDetails";
import { useState } from "react";
import { PaymentStages } from "@/utils/enums/dashboard.enums";

export function Payment() {
  const [presentStage, setPresentStage] = useState<PaymentStages>(
    PaymentStages.Preview
  );
  const formMethods = useForm({
    mode: "all",
  });
  const { handleSubmit } = formMethods;

  const submit = (data: { plan?: string }) => {
    console.log({ data });
    if (data?.plan) {
      setPresentStage(PaymentStages.Payment);
    }
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(submit)}>
          <div className="max-w-6xl -mt-11 mb-11 md:-mt-32 mx-auto my-0 px-8 py-8 bg-white rounded-2xl shadow-2xl max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch mt-3.5 max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="">
                      <div className="flex flex-col items-stretch w-full max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-start max-md:mt-10 max-md:max-w-full">
                          <div className="flex gap-4 items-stretch text-xl font-medium text-black whitespace-nowrap max-md:ml-2.5">
                            <img
                              loading="lazy"
                              srcSet={Images.SmartNetworkAd.SimCard}
                              className="object-center aspect-[0.75] w-[43px]"
                            />
                            <h3 className="grow my-auto">Order SIM</h3>
                          </div>
                          <div className="mt-5 text-2xl font-medium text-black max-md:max-w-full">
                            We are glad you have decided to join us!
                          </div>
                          <div className="mt-2 text-xl font-light text-black max-md:max-w-full">
                            Lets start with some details about yourself
                          </div>
                          <Stepper status={presentStage} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {presentStage === PaymentStages.Preview ? (
                    <OrderDetails />
                  ) : (
                    <AlmostDoneCardDetails />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch px-6 py-11 mx-auto w-full bg-pink-50 rounded-xl max-md:px-5 max-md:mt-10">
                  <div className="flex gap-4 justify-between items-stretch text-xl font-medium text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/def972215be41a48aa9e40a0f4eb35cf90885a86fcb759504d52319db14a5f0c?"
                      className="object-center w-10 aspect-square"
                    />
                    <div className="flex-auto my-auto">Order Summary</div>
                  </div>

                  <div className="flex gap-2.5 items-stretch pr-2.5 mt-6 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e1715fb51ab2f604aff432d40c2c894c7323a8ba13137a6771b406eac95150?"
                      className="object-center aspect-[1.45] w-[51px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19be5c78e4a96acbf71d7ee07ed07782741ff3cbc41d4d0f8cf9557f5d696574?"
                      className="object-center aspect-[1.45] w-[51px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3df0b80727d73f477a78467e38b2ca649f4724ffc6bc480abe5d166f5c70b84?"
                      className="object-center aspect-[1.45] w-[51px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e711751d880ad2e89f4fd12468c3284f68bab3ca022850d46b2b6fa0554b2de?"
                      className="object-center aspect-[1.45] w-[51px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5581a44828cc2f4631ba2737146057d390c83a532109b282b000200a4ee50b5d?"
                      className="object-center aspect-[1.45] w-[51px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8ab2644a97c0c27dbb78c2bfc95b7b9c178bfd8c3937723c135a72ac312f0?"
                      className="object-center aspect-[1.45] w-[51px]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between items-stretch mt-9 w-full text-xl text-black whitespace-nowrap">
                    <div className="flex gap-4 justify-between items-stretch font-light">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="object-center justify-center items-center aspect-[0.75] w-[33px]"
                      />
                      <div className="grow my-auto">Free 5G SIM</div>
                    </div>
                    <div className="my-auto font-medium">Free</div>
                  </div>
                  <div className="flex gap-5 justify-between items-stretch mt-7 w-full text-xl text-black">
                    <div className="flex gap-5 justify-between items-stretch font-light">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1af72742f35cd6beeb49073bcbc38baaa2f85125ee08d231e95041334ef42180?"
                        className="object-center aspect-square w-[30px]"
                      />
                      <div className="flex-auto">Talk4Mobile 5G</div>
                    </div>
                    <div className="my-auto">£25.0</div>
                  </div>
                  <div className="flex gap-5 justify-between items-stretch mt-7 w-full text-xl text-black whitespace-nowrap">
                    <div className="flex gap-4 justify-between items-stretch font-light">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26f319b36e3b918470af2387072fa2d4f604aed0eec404a631b51890dc3364f?"
                        className="object-center aspect-square w-[37px]"
                      />
                      <div className="grow my-auto">Delivery Charges</div>
                    </div>
                    <div className="my-auto font-medium">Free</div>
                  </div>
                  <hr className="mt-10" />
                  <div className="flex gap-5 justify-between items-stretch mt-10 text-xl text-black">
                    <div className="flex-auto font-medium">Total Amount</div>
                    <div className="font-bold">£25.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
}
