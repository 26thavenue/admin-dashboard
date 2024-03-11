// import { DBImages } from "../../../pages/Plans/DBImageImports";

type TPricingCard = {
  plan?: string;
  amount?: string | number;
  supportText?: string;
  buy?: () => void;
  details?: () => void;
  feature?: string;
  more_feature?: string;
  icon?: string;
};

function RatesStats({
  plan,
  supportText,
  icon,
}: TPricingCard) {
  return (
    <div className="bg-white w-[100%] md:w-[90%] pt-[27.498px] pr-[13.251px] pb-[18.964px] pl-[13.238px] rounded-[21px]">
      <div className="flex flex-row-reverse justify-around items-center">
        <div>
          <p className="text-[15px]">{supportText}</p>
          <h3 className="text-[24px] font-bold">{plan}</h3>
        </div>
        <div className="text-[15.171px] font-bold">
          <img src={icon} alt="Alt" />
        </div>
      </div>
    </div>
  );
}

export default RatesStats;
