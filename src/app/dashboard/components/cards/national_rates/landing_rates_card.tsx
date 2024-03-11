

type TPricingCard = {
  plan?: string;
  amount?: string | number;
  buy?: () => void;
  details?: () => void;
  features?: string[];
  title: string;
  subText: string;
  image: string;
};

function LandingRatesCard({ plan, buy, title, subText, image }: TPricingCard) {
  return (
    <div className="bg-[#FFEEF6] w-[100%] pt-[27.498px] pr-[13.251px] pb-[18.964px] pl-[13.238px] rounded-[7.586px]">
      <div className="flex justify-center items-center">
        <img src={image} alt={plan} />
      </div>
      <div className="mb-5 mt-3">
        <div className=" ">
          <p className="text-center text-[16px] font-medium text-[#606060]">
            {title}
          </p>
          <p className="text-center text-[12px] text-[#606060] ">
            {subText}
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={buy}
          className=" text-white bg-blue rounded-[4px] py-1 px-6 text-[15px]"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default LandingRatesCard;
