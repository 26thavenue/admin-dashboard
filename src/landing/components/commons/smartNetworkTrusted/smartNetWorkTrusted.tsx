import { TrustedNetworks } from "./trustedNetworks";

export default function SmartNetworkTrusted() {
  return (
    <div className="items-center bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-5xl flex-col items-center mt-1.5 mb-3.5 max-md:max-w-full">
        <h3 className="text-3xl lg:text-3xl font-bold text-left mt-0 m-0 ">
          The Smart Network Trusted by Smarter People
        </h3>
        <p className="font-normal text-center max-w-[600px] text-[18px] mt-2">
          Meet Talk4 Mobile – A next generation reliable and flexible mobile
          network offering you more value and the best network coverage in the
          UK.
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
  support,
  img,
}: {
  name: string;
  support: string;
  img: string;
}) {
  return (
    <div className="bg-[#FFEEF6] w-[100%] py-[18px] pr-[13.251px] pl-[13.238px] rounded-[7.586px]">
      <div className="justify-center items-stretch flex grow flex-col w-full pt-4 pb-6 px-4 rounded-lg max-md:mt-6">
        <img
          loading="lazy"
          srcSet={img}
          alt={name}
          className="aspect-square object-contain object-center w-[74px] justify-center items-center overflow-hidden self-center max-w-full"
        />
        <div className="text-zinc-800 text-center text-base font-bold self-center whitespace-nowrap mt-6">
          {name}
        </div>
        <div className="text-zinc-600 text-center text-xs leading-5 mt-1.5">
          {support}
        </div>
      </div>
    </div>
  );
}
