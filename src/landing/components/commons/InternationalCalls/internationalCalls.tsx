import { TrustedNetworks } from "./specialUKRates";
import InternationalSearchV2 from "../../../../app/dashboard/components/cards/country_search/InternationalSearchV2";

export default function InternationalRates() {
  return (
    <div className="relative items-center bg-[#FFEEF6] flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-5xl flex-col items-center mt-1.5 mb-3.5 max-md:max-w-full">
        {/* <div className=""> */}
        <InternationalSearchV2 className="shadow-lg absolute -top-8 w-full max-w-[600px] z-50 rounded-md" />
        {/* </div> */}
        <p className="font-light text-blue uppercase text-center max-w-[600px] text-[18px] mb-2">
          Standard Rates
        </p>
        <h3 className="text-3xl lg:text-3xl font-bold text-center mt-0 m-0 ">
          International Calling Rates for Nigeria
        </h3>
        <p className="font-normal text-center max-w-[600px] text-[18px] mt-2">
          Talk4 Mobile offers high-quality, low-cost International Calls to
          Nigeria
        </p>
        <div className="self-stretch mt-0 max-md:max-w-4xl max-md:mt-6">
          <div className="relative  max-w-3xl mx-auto mt-12 mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {TrustedNetworks?.map((item, index) => (
              <SmartNetworkCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartNetworkCard({
  name,
  img,
  button,
}: {
  name: string;
  img: string;
  button: string;
}) {
  return (
    <div className="relative bg-white h-[220px] w-[100%] py-[18px] pr-[13.251px] pl-[13.238px] rounded-[7.586px] flex justify-center items-center">
      <div className=" justify-center items-stretch flex grow flex-col w-full pt-0 pb-6 px-4 rounded-lg max-md:mt-2">
        <img
          loading="lazy"
          srcSet={img}
          alt={name}
          className="aspect-square object-contain object-center w-[74px] justify-center items-center overflow-hidden self-center max-w-full"
        />
        <p className="text-black text-center text-[14px] font-normal self-center  mt-2">
          {name}
        </p>
        <h4 className="text-black text-center text-[20px] font-medium self-center  mt-2">
          {button}
        </h4>
      </div>
    </div>
  );
}
