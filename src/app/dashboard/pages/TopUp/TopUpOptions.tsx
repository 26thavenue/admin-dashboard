import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import TopUpModal from "./TopUpModal";
import { Form, useNavigate } from "react-router-dom";
import { Button, FormInput } from "../../../sharedcomponents/form";
import { FormProvider, useForm } from "react-hook-form";

interface ITopUp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const plans = [
  {
    name: "Credit Card",
    ram: "Pay with your credit card and enter your details ",
  },
  {
    name: "Paypal",
    ram: "Pay with paypal and enter your details",
  },
];

export function TopUpPaymentOptions() {
  const [selected, setSelected] = useState({
    name: "",
    ram: "",
  });
  const [topUpModal, setTopUpModal] = useState(false);

  const PaymentOptions = () => {
    if (selected?.name === "Credit Card") {
      setTopUpModal(!topUpModal);
    }
    console.log(selected.name);
  };

  useEffect(() => {
    PaymentOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="w-full px-0 py-0">
      <div className="mx-auto w-full ">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Payment Types</RadioGroup.Label>
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ checked }) =>
                  `
                  ${checked ? "bg-[#FFEEF6] text-black" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none h-[80px]`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* {checked && ( */}
                        <div className="shrink-0 text-black">
                          <CheckIcon className="h-6 w-6" checked={checked} />
                        </div>

                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-black" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-black" : "text-gray-500"
                            }`}
                          >
                            <span>{plan.ram}</span>
                            {/* <span aria-hidden="true">&middot;</span>{" "}
                            <span>{plan.disk}</span> */}
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        {topUpModal && (
          <TopUpModalFlips setIsOpen={setTopUpModal} isOpen={topUpModal} />
        )}
      </div>
    </div>
  );
}

function CheckIcon(props: { className: string; checked: boolean }) {
  const { checked } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx={12}
        cy={12}
        r={12}
        fill={checked ? "#1c68f5" : "#000"}
        opacity="0.2"
      />
      <path
        d="M7 13l3 3 7-7"
        stroke={checked ? "#1c68f5" : "#000"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TopUpModalFlips({ isOpen, setIsOpen }: ITopUp) {
  const [modalFlip, setModalFlip] = useState(true);
  const navigate = useNavigate();

  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;
  return (
    <TopUpModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header={modalFlip ? "Card Details" : "Your Billing Address"}
      description={
        modalFlip
          ? "Fill the fields below to Top-Up"
          : "Fill the fields below to Top-Up"
      }
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(() => console.log("submitted"))}>
          {!modalFlip && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <FormInput
                name="card_number"
                title="Select Country"
                placeholder="Select Country"
                type="numeric"
              />
              <FormInput
                name="card_name"
                title="Adddress Line 1"
                placeholder="Enter Adddress Line 1"
                type="text"
              />
              <FormInput
                name="cvv"
                title="Address Line 2"
                placeholder="Enter Address Line 2"
                type="numeric"
              />
              <FormInput
                name="cvv"
                title="Address Line 3"
                placeholder="Enter Address Line 3"
                type="numeric"
              />
              <FormInput
                name="cvv"
                title="Address Line 4"
                placeholder="Enter Address Line 4"
                type="numeric"
              />
              <FormInput
                name="expiry_date"
                title="County/Province"
                placeholder="County Province"
                type="text"
              />
              <FormInput
                name="card_name"
                title="Post Card"
                placeholder="Enter Post Card"
                type="text"
              />
              <div></div>

              <Button disabled={!isValid} onClick={() => navigate("confirm")}>
                Continue
              </Button>
              <Button
                onClick={() => setModalFlip(!modalFlip)}
                variant="secondary"
                type="button"
              >
                Back
              </Button>
            </div>
          )}
          {modalFlip && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <FormInput
                name="card_number"
                title="Card Number"
                placeholder="Enter Card Number"
                type="numeric"
              />
              <FormInput
                name="card_name"
                title="Card Name"
                placeholder="Enter Card Name"
                type="text"
              />
              <FormInput
                name="cvv"
                title="CVV"
                placeholder="Enter CVV"
                type="numeric"
              />
              <FormInput
                name="expiry_date"
                title="Enter Expiry Date"
                placeholder="MM/YY"
                type="text"
              />
              <div></div>
              <Button
                disabled={!isValid}
                onClick={() => setModalFlip(!modalFlip)}
              >
                Continue
              </Button>
            </div>
          )}
        </Form>
      </FormProvider>
    </TopUpModal>
  );
}
