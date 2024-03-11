import ProductPriceSwitch from "@/app/dashboard/components/header/productsSwitch";
import ToggleSwitch from "@/app/dashboard/components/switch";
import { Button } from "@/app/sharedcomponents/form";
import { Control, Controller, FieldValues } from "react-hook-form";

export function AddCreditPlan({
  control,
}: {
  control: Control<FieldValues> | undefined;
}) {
  return (
    <div className="flex flex-col justify-center items-stretch px-5 py-8 mt-10 bg-pink-50 rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="self-start text-2xl font-bold text-black max-md:max-w-full">
        Add Credit Plans
      </div>
      <div className="self-start mt-4 text-xl font-light leading-6 text-black max-md:max-w-full">
        Add credit and/ or plans to your order below. Any new SIM orders will
        arrive pre-loaded and ready to use immediately
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-stretch py-6 pr-8 pl-3.5 mx-auto w-full text-xl bg-white rounded-lg max-md:pr-5 max-md:mt-5">
              <div className="font-light text-black">
                Add credit to your SIM
              </div>
              <br />
              <Controller
                name="plan"
                rules={{
                  required: true,
                }}
                defaultValue={false}
                control={control}
                render={({ field }) => <ProductPriceSwitch {...field} />}
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-stretch px-3.5 py-6 w-full bg-white rounded-lg max-md:pr-5 max-md:mt-5">
              <div className="text-xl font-light text-black">
                Add Plan to your SIM
              </div>
              <br />
              <Button type="button">Update Plan</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-end mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-stretch px-3 py-6 mx-auto w-full bg-white rounded-lg max-md:mt-5">
              <div className="text-xl font-bold leading-6 text-black">
                Every time your credit reaches £1
              </div>
              <div className="mt-2 text-xl font-light text-black whitespace-nowrap">
                It will be topped up with £2.5
              </div>
              <div className="flex gap-2 justify-between items-center mt-5">
                <div className="flex flex-col justify-center items-stretch self-start py-1.5 pr-1 pl-4 aspect-[1.57] fill-white stroke-[0.511px] stroke-blue-500">
                  <Controller
                    name="auto_renew"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => <ToggleSwitch {...field} />}
                  />
                </div>
                <div className="grow text-xl font-medium text-black whitespace-nowrap">
                  Auto Renew is OFF
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-stretch px-3.5 py-7 mx-auto w-full bg-white rounded-lg max-md:mt-5">
              <div className="text-xl font-bold text-black">100GB Data</div>
              <div className="mt-4 text-xl font-light text-black whitespace-nowrap">
                Unltd Mins. | Unltd Texts
              </div>
              <div className="flex gap-2 justify-between items-center mt-7">
                <div className="flex flex-col justify-center items-stretch self-start py-1.5 pr-1 pl-4 aspect-[1.57] fill-white stroke-[0.511px] stroke-blue-500">
                  <Controller
                    name="auto_renew_top_up"
                    control={control}
                    render={({ field }) => <ToggleSwitch {...field} />}
                  />
                </div>
                <div className="grow text-xl font-medium text-black whitespace-nowrap">
                  Auto Renew is OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
