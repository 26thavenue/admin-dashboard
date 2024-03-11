import { TrustedNetworks } from "./specialUKRates";
import InternationalSearchV2 from "../../../../app/dashboard/components/cards/country_search/InternationalSearchV2";

export default function InternationalRatesBetween() {
  return (
    <div className="relative items-center  flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-5xl flex-col items-center mt-1.5 mb-3.5 max-md:max-w-full">
        <div className="absolute justify-center flex lg:flex-row flex-col gap-4 -top-48 lg:-top-20 w-[90%] lg:w-full lg:max-w-[800px] max-w-[900px] z-50 shadow-md p-6 rounded-lg bg-white">
          <div className="w-[100%]">
            <p>Calling From</p>
            <InternationalSearchV2 height="55px" />
          </div>
          <div className="w-[100%]">
            <p>Calling To</p>
            <InternationalSearchV2 height="55px" />
          </div>
        </div>
        {/* <p className="font-light text-blue uppercase text-center max-w-[600px] text-[18px] mb-2">
          Standard Rates
        </p> */}
        <h3 className="text-3xl lg:text-3xl font-bold mt-0 m-0  text-center">
          Your True companion for connectivity on the Go
        </h3>
        <p className="font-normal text-center max-w-[850px] text-[18px] mt-2">
          Explore roaming charges before travelling and keep phone costs in
          check when you're abroad. Roaming from Afghanistan is included as part
          of the Talk Home service. Check out some recommended plans below:
        </p>
        <div className="bg-[#FFEEF6] self-stretch p-8 mt-5 max-md:max-w-4xl max-md:mt-6 max-md:mb-6">
          <p className="-mb-8 text-center">
            Roaming Charges from <b>Afghanistan</b> to <b>Algeria</b>
          </p>
          <div className="relative  max-w-3xl mx-auto mt-12 mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {TrustedNetworks?.map((item, index) => (
              <SmartNetworkCard key={index} {...item} />
            ))}
          </div>
          <p className="-mb-8 mt-8 text-center">
            Roaming Charges from <b>Afghanistan</b> to <b>Algeria</b>
          </p>
          <div className="relative  max-w-3xl mx-auto mt-12 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
