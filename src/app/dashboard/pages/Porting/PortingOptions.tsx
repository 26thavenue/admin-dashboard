import { useState } from "react";
import TopUpModal from "./TopUpModal";
import { Form, useNavigate } from "react-router-dom";
import { Button, FormInput } from "../../../sharedcomponents/form";
import { FormProvider, useForm } from "react-hook-form";
import { Regex } from "../../../../utils/regex";

interface ITopUp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopUpPaymentOptions() {
  const [topUpModal, setTopUpModal] = useState(false);
  const [modalFlip, setModalFlip] = useState(true);

  return (
    <div className="w-[80%] mx-auto px-0 py-0 grid grid-flow-col gap-2">
      <Button
        onClick={() => {
          setTopUpModal(true);
          setModalFlip(true);
        }}
      >
        Port In
      </Button>
      <Button
        onClick={() => {
          setTopUpModal(true);
          setModalFlip(false);
        }}
        variant="secondary"
      >
        Port Out
      </Button>
      {topUpModal && (
        <TopUpModalFlips
          setIsOpen={setTopUpModal}
          isOpen={topUpModal}
          modal={modalFlip}
          setModal={setModalFlip}
        />
      )}
    </div>
  );
}

function TopUpModalFlips({ isOpen, setIsOpen, modal, setModal }: ITopUp) {
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
      header={modal ? "Port - In Request" : "Port - Out Request"}
      description={
        modal
          ? "Fill the fields below to Port-In"
          : "Fill the fields below to Port-Out"
      }
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(() => console.log("submitted"))}>
          {!modal && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <FormInput
                  name="card_number"
                  title="Your Number (MSISDN)"
                  placeholder="Enter Your Number (MSISDN)"
                  type="numeric"
                />
                <FormInput
                  name="card_name"
                  title="Port-out Date"
                  placeholder="Enter Port-out Date"
                  type="date"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mt-4">
                <FormInput
                  name="cvv"
                  title="Can you let use know why you are leaving us?"
                  placeholder="Can you let use know why you are leaving us?"
                  type="numeric"
                />
              </div>
              <Button disabled={!isValid} onClick={() => navigate("confirm")}>
                Confirm
              </Button>
            </>
          )}
          {modal && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <FormInput
                name="card_number"
                title="Your Number (MSISDN)"
                placeholder="e.g 4489393049"
                type="numeric"
                moreRegister={{
                  pattern: {
                    value: Regex.phone.pattern,
                    message: Regex.phone.message,
                  },
                }}
              />
              <FormInput
                name="card_names"
                title="PAC Number"
                placeholder="Enter PAC Number"
                type="text"
              />
              <FormInput
                name="card_name"
                title="Port-out Date"
                placeholder="Enter Port-out Date"
                type="date"
              />
              <div></div>
              <div></div>
              <Button disabled={!isValid} onClick={() => setModal(!modal)}>
                Continue
              </Button>
            </div>
          )}
        </Form>
      </FormProvider>
    </TopUpModal>
  );
}
