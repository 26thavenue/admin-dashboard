import { Images } from "@/assets/images";
import { URLs } from "@/utils/enums";
import { useNavigate } from "react-router-dom";

interface TPlansLeads {
  image: string;
  leadText: string;
  supportText: string;
  heading: string;
  isBolt?: boolean;
}

function MainLeads({ supportText, heading }: TPlansLeads) {
  const { Leads } = Images;
  const { Main } = Leads;

  const {
    MainRocket,
    MainChinaGuy,
    MainBrownLady,
    MainSim,
    MainYellowLady,
    MainHappyFamily,
    MainDotsGroupA,
    MainDotsGroupB,
    MainDotA,
    MainDotB,
    MainDotC,
    MainDotD,
    MainMulti,
  } = Main;

  const Buttons = () => {
    const navigate = useNavigate();
    return (
      <div className="mt-6 mx-auto my-0 flex flex-col md:flex-row justify-center gap-3 min-w-[100%] md:min-w-[20rem]">
        <button
          onClick={() => navigate(`/${URLs.Order_Sim}`)}
          className="text-white bg-blue font-normal w-[100%] rounded-[4.741px] py-2 px-3"
        >
          Order Free Sim
        </button>
        <button
          onClick={() =>
            navigate(`/${URLs.Product_Plans}/${URLs.Product_Plans_PaygA}`)
          }
          className="bg-white text-blue font-normal w-[100%] rounded-[4.741px] py-2 px-3"
        >
          View Plans
        </button>
      </div>
    );
  };

  return (
    <div className="bg-brand calc_height md:h-[520px] text-white px-8">
      <div className="relative max-w-6xl w-full flex items-start md:items-center justify-[unset] md:justify-center mx-auto my-0 h-[inherit] flex-col md:flex-row">
        <div className="relative pt-5 w-[100%] max-w-[36.7rem] leading-6 mx-auto flex flex-col gap-2 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center px-1 z-20">
            {heading}
          </h2>
          <p className="text-center">{supportText}</p>
          <Buttons />
        </div>
        <img
          className="absolute block md:hidden left-90 bottom-20"
          src={MainMulti}
        />
        <img
          className="absolute hidden md:block left-90 top-12"
          src={MainDotA}
        />
        <img
          className="absolute hidden md:block left-72 bottom-12"
          src={MainDotD}
        />
        <img
          className="absolute hidden md:block top-14 right-80"
          src={MainDotC}
        />
        <img
          className="absolute hidden md:block bottom-12 right-80"
          src={MainDotB}
        />
        <img className="absolute -left-4 top-4" src={MainDotsGroupA} />
        <img
          className="absolute hidden md:block bottom-4 -right-4"
          src={MainDotsGroupB}
        />
        <img
          className="absolute hidden md:block md:bottom-8 md:left-20"
          src={MainRocket}
        />
        <img
          className="absolute hidden md:block md:left-40 bottom-0 top-0 md:top-2"
          src={MainChinaGuy}
        />
        <img
          className="absolute hidden md:block left-0 md:left-4 "
          src={MainBrownLady}
        />
        <img
          className="absolute hidden md:block right-40 bottom-8 max-w-[80%]"
          src={MainSim}
        />
        <img
          className="absolute hidden md:block -right-6 top-32"
          src={MainYellowLady}
        />
        <img
          className="absolute hidden md:block right-48 -top-2"
          src={MainHappyFamily}
        />
      </div>
    </div>
  );
}

export default MainLeads;
