import { IoCheckmarkDone } from "react-icons/io5";

type TPricingCard = {
  plan?: string;
  amount?: string | number;
  buy?: () => void;
  details?: () => void;
  features?: string[];
};

const DummieFeatures = ["Internation Calls", "More International Calls"];

function Pricing({
  plan,
  amount,
  buy,
  details,
  features = DummieFeatures,
}: TPricingCard) {
  return (
    <div className="bg-[#FFEEF6] w-[100%] pt-[27.498px] pr-[13.251px] pb-[18.964px] pl-[13.238px] rounded-[7.586px]">
      <div className="flex justify-between items-center">
        <h3 className="text-[15.171px] font-bold">{plan}</h3>
        <h3 className="text-[15.171px] font-bold">{amount}</h3>
      </div>
      <div className="mb-5 mt-3">
        {features?.map((feature: string) => {
          return (
            <div className="text-[14px] font-normal flex gap-2 text-[#606060] items-center">
              <IoCheckmarkDone className="text-brand text-[18px]" />
              <p>{feature}</p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#C0C0C1]" />
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={details}
          className="border border-blue text-blue w-[100%] rounded-[4.741px] py-1 text-[14px]"
        >
          See Details
        </button>
        <button
          onClick={buy}
          className="text-white bg-blue w-[100%] rounded-[4.741px] py-1"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Pricing;
