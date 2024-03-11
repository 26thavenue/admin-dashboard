import { Button } from "@/app/sharedcomponents/form";
import AlmostDone from "./AlmostDone";
import BillingAddress from "./BillingAddress";
import { useFormContext } from "react-hook-form";

function AlmostDoneCardDetails() {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <>
      <AlmostDone />
      <BillingAddress>
        <Button className="text-base" disabled={!isValid}>
          Proceed
        </Button>
      </BillingAddress>
    </>
  );
}

export default AlmostDoneCardDetails;
