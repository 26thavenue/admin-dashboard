// import { useState } from "react";
import Pricing from "../../../../app/dashboard/components/cards/pricing";
import { Images } from "../../../../assets/images";
// import { PlansTopModal } from "./TopUpOptions";

type TLandingPlans = {
  heading?: string;
  supportText?: string;
  image_1?: string;
  image_2?: string;
  page_source?: boolean;
};



function LandingPlans({
  heading = "Say Goodbye to Annual Price Hikes",
  supportText = "Keep your phone bill low & experience 5G at no additional cost for the entire year.",
  image_1 = Images?.Plans?.WaveOne,
  image_2 = Images?.Plans?.WaveTwo,
  page_source = true,
}: TLandingPlans) {
  return (
    <>
      <div className="h-full lg:h-full w-full relative px-6 py-6">
        <img
          className="absolute right-28 top-10 hidden lg:block"
          src={image_1}
          alt="Plans Icon"
        />
        <img
          className="absolute -top-6 left-0 lg:left-28 lg:top-10 lg:block"
          src={image_2}
          alt="Plans Icon"
        />
        <div className="flex flex-col items-center justify-center w-full gap-2 text-black ">
          <h3 className="text-3xl lg:text-3xl font-bold text-center mt-4">
            {heading}
          </h3>
          <p className="font-normal text-center max-w-[600px]">{supportText}</p>
          {page_source && <PlansSwitch />}
        </div>
        <PlansCards />
      </div>
    </>
  );
}

export default LandingPlans;

export function PlansCards() {
  // const [topUpModal, setTopUpModal] = useState(false);
  return (
    <div className="relative max-w-6xl mx-auto mt-12 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <Pricing
        // buy={() => setTopUpModal(true)}
        plan={"3GB Data"}
        amount={"300"}
      />
      <Pricing plan={"3GB Data"} amount={"300"} />
      <Pricing plan={"3GB Data"} amount={"300"} />
      <Pricing
        plan={"3GB Data"}
        amount={"300"}
        features={["Internation Stufss", "Great Pricing"]}
      />
      <Pricing plan={"3GB Data"} amount={"300"} />
      <Pricing plan={"3GB Data"} amount={"300"} />
      <Pricing
        plan={"3GB Data"}
        amount={"300"}
        features={["Internation Stufss", "Great Pricing"]}
      />
      <Pricing
        plan={"3GB Data"}
        amount={"300"}
        features={["Internation Stufss", "Great Pricing"]}
      />
      {/* {topUpModal && (
        <PlansTopModal
          setIsOpen={setTopUpModal}
          isOpen={topUpModal}
          // modal={modalFlip}
          // setModal={setModalFlip}
        />
      )} */}
    </div>
  );
}

export function PlansSwitch() {
  return (
    <div className="mt-5 grid grid-cols-2 w-full max-w-sm">
      <button className="text-white bg-blue w-[100%] rounded-l-[8px] py-2">
        Pay As You Go
      </button>
      <button className="border border-blue text-blue w-[100%] rounded-r-[8px] py-2 text-[14px]">
        Monthly{" "}
        <span className="bg-brand text-white text-[11px] p-1 rounded-[8px]">
          2x Data
        </span>
      </button>
    </div>
  );
}


