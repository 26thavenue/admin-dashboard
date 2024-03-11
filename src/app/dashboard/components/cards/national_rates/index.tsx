import { DBImages } from "../../../pages/DBHome/DBImageImports";

type TPricingCard = {
  plan?: string;
  amount?: string | number;
  buy?: () => void;
  details?: () => void;
  features?: string[];
};

function NationalRateCard({ plan, buy }: TPricingCard) {
  return (
    <div className="bg-[#FFEEF6] w-[100%] pt-[27.498px] pr-[13.251px] pb-[18.964px] pl-[13.238px] rounded-[7.586px]">
      <div className="flex justify-center items-center">
        <img src={DBImages.Message} alt={plan} />
      </div>
      <div className="mb-5 mt-3">
        <div className="text-[16px] font-medium text-[#606060] ">
          <p className="text-center">Talk4 Mobile texts on the same network</p>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={buy}
          className=" text-white bg-blue w-[101.932px] rounded-[26px] py-1 text-[13px]"
        >
          Free
        </button>
      </div>
    </div>
  );
}

export default NationalRateCard;
