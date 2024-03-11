import { ESteppers, PaymentStages } from "@/utils/enums/dashboard.enums";
import StepperComp from "./StepperComp";

function Stepper({ status }: { status: string }) {
  console.log({ status });
  return (
    <div className="flex w-full gap-5 justify-between items-center my-8 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <StepperComp
        status={
          status === PaymentStages.Preview ? ESteppers.Present : ESteppers.Done
        }
        name="Order Details"
      />
      <StepperComp
        status={
          status === PaymentStages.Payment ? ESteppers.Present : ESteppers.Done
        }
        name="Payments confrim"
      />
      <StepperComp name="Confirmation" />
    </div>
  );
}

export default Stepper;
