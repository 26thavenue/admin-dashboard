import LandingRatesCard from "../../../app/dashboard/components/cards/national_rates/landing_rates_card";
import { Images } from "../../../assets/images";

function ProductsGroups() {
  const { productGroup, Free_Data } = Images;
  const { FreeData2, FreeData3 } = Free_Data;
  const { WorldInternet, BillDate, LightningBolt, ListAnalysis } = productGroup;
  return (
    <div className="bg-brand h-[auto] p-8 lg:h-[auto] relative">
      <img
        className="absolute right-28 top-10 hidden lg:block"
        src={FreeData2}
        alt="Plans Icon"
      />
      <img
        className="absolute -top-6 left-0 lg:left-28 lg:top-10 lg:block"
        src={FreeData3}
        alt="Plans Icon"
      />
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 text-white ">
        <h3 className="text-3xl lg:text-3xl font-bold text-center">
          Do More with Talk4 Mobile
        </h3>
        <p className="font-normal text-center">
          Get more with Talk4 Mobile. Enjoy plenty of data, minutes & SMS for
          less.
        </p>
        <div className="max-w-5xl mx-auto mb-5 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <LandingRatesCard
            image={BillDate}
            title="Monthly Plans"
            subText="Check out great offers on our Monthly plans and enjoy 2x more data from Talk4 Mobile."
            plan={"3GB Data"}
            amount={"300"}
          />
          <LandingRatesCard
            image={ListAnalysis}
            title="PAYG Plans"
            subText="Explore no-contract, affordable PAYG plans from Talk4 Mobile that start from just 1p."
            plan={"3GB Data"}
            amount={"300"}
          />
          <LandingRatesCard
            image={LightningBolt}
            title="Data Bolt-ons"
            subText="Never run out of data when you need it most with Talk4 Mobile’s affordable bolt-ons."
            plan={"3GB Data"}
            amount={"300"}
          />
          <LandingRatesCard
            image={WorldInternet}
            title="International Plans"
            subText="Explore various international plans to make cheap calls internationally from the UK."
            plan={"3GB Data"}
            amount={"300"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsGroups;
