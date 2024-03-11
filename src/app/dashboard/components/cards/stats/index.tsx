

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

function Stats({
  plan,
  supportText,
  feature,
  more_feature,
}: TPricingCard) {
  return (
    <div className="bg-transparent w-[100%] pt-[27.498px] pr-[13.251px] pb-[18.964px] pl-[13.238px]">
      <div className="mb-3 mt-3">
        <div className="flex flex-row gap-6">
          <div className="text-[14px] text-grey font-normal flex gap-2 items-center">
            <p>{feature}</p>
          </div>
          {more_feature && (
            <div className="text-[14px] text-grey font-normal flex gap-2 items-center">
              <p>{more_feature}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[24px] font-bold">{plan}</h3>
          <p className="text-[15px]">{supportText}</p>
        </div>
      
      </div>
    </div>
  );
}

export default Stats;
