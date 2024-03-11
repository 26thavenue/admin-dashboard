import { Images } from "@/assets/images";
import { ESteppers } from "@/utils/enums/dashboard.enums";

type TStepperComp = {
  name: string;
  status?: string;
};

function StepperComp({ name, status }: TStepperComp) {
  let image;
  const { Stepper } = Images;
  switch (status) {
    case ESteppers.Done:
      image = Stepper?.StepperDone;
      break;
    case ESteppers.Present:
      image = Stepper?.StepperUndone;
      break;
    case ESteppers.Not_Done:
      image = Stepper?.StepperPending;
      break;
    default:
      image = Stepper?.StepperPending;
      break;
  }
  return (
    <div className="flex flex-col items-stretch px-2.5">
      <img src={image} className="w-8 block mx-auto my-0" />
      <div className="mt-5 text-base font-medium leading-6 text-center text-slate-700">
        {name}
      </div>
    </div>
  );
}

export default StepperComp;
