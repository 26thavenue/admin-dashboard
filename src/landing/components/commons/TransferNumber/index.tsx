import { TrustedNetworks } from "./transferNumberList";

export default function TransferNumber() {
  return (
    <div className="items-center bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-5xl flex-col items-center mt-1.5 mb-3.5 max-md:max-w-full">
        <h3 className="text-3xl font-bold text-center mt-0 m-0 max-w-[600px]">
          How Do I Transfer My Phone Number to Talk4 Mobile
        </h3>
        <p className="font-normal text-center max-w-[600px] text-[18px] mt-2">
          Bringing your existing number to Talk4 Mobile is a simple 4-step
          process. Follow this guide to successfully port your number
        </p>
        <div className="self-stretch mt-6 max-md:max-w-full max-md:mt-6">
          <div className="relative max-w-6xl mx-auto mt-12 mb-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
  des,
}: {
  name: string;
  support: string;
  img: string;
  des: string;
}) {
  return (
    <div className="bg-[#FFEEF6] w-[100%] py-[18px] pr-[13.251px] pl-[13.238px] rounded-[7.586px] relative">
      <img
        loading="lazy"
        srcSet={des}
        alt={name}
        className="aspect-square object-contain object-center justify-center items-center overflow-hidden  max-w-full absolute top-0 -right-0"
      />
      <div className="justify-left items-stretch flex grow flex-col w-full pt-4 pb-6 px-4 rounded-lg max-md:mt-6">
        <img
          loading="lazy"
          srcSet={img}
          alt={name}
          className="aspect-square object-contain object-center w-[50px] justify-center items-center overflow-hidden  max-w-full"
        />
        <h3 className="text-zinc-800 text-left text-base font-bold mt-6">
          {name}
        </h3>
        <p className="text-zinc-600 text-left text-xs leading-5 mt-1.5">
          {support}
        </p>
      </div>
    </div>
  );
}
