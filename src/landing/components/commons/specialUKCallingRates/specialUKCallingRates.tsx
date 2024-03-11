import { TrustedNetworks } from "./specialUKRates";

export default function SpecialUKCallingRates() {
  return (
    <div className="items-center bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-5xl flex-col items-center mt-1.5 mb-3.5 max-md:max-w-full">
        <h3 className="text-3xl lg:text-3xl font-bold text-left mt-0 m-0 ">
          Special UK Calling Rates
        </h3>
        <p className="font-normal text-center max-w-[600px] text-[18px] mt-2">
          We believe in total transparency. The table below gives a breakdown of
          Talk4 Mobile charges for different types of services & local phone
          numbers UK-wide.
        </p>
        <div className="self-stretch mt-6 max-md:max-w-full max-md:mt-6">
          <div className="relative max-w-6xl mx-auto mt-12 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  button: string;
  img: string;
}) {
  return (
    <div className="relative bg-[#FFEEF6] h-[220px] w-[100%] py-[18px] pr-[13.251px] pl-[13.238px] rounded-[7.586px] flex justify-center items-center">
      <div className=" justify-center items-stretch flex grow flex-col w-full pt-0 pb-6 px-4 rounded-lg max-md:mt-2">
        <img
          loading="lazy"
          srcSet={img}
          alt={name}
          className="aspect-square object-contain object-center w-[74px] justify-center items-center overflow-hidden self-center max-w-full"
        />
        <div className="text-black text-center text-[14px] font-medium self-center  mt-2">
          {name}
        </div>
      </div>
      <button className="absolute bottom-5 text-white bg-blue rounded-[26px] p-1 px-3 disabled text-[12px]">
        {button}
      </button>
    </div>
  );
}
