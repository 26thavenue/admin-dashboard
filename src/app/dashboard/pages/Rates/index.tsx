import { useMatches } from "react-router-dom";
import Pricing from "../../components/cards/pricing";
import DBHomeTemplate from "../template";
import PlansPageSwitcher from "./RatesPageSwitcher";
import { URLs } from "../../../../utils/enums";
import RatesStats from "../../components/cards/rates_stats";
import InternationalSearch from "../../components/cards/country_search/InternationalSearch";
import { DBImages } from "../DBHome/DBImageImports";

function Rates() {
  const matches = useMatches();
  const data = matches[4]?.pathname?.split("/")?.[3];
  const { name, supportText } = PlansPageSwitcher(data);

  return (
    <DBHomeTemplate
      name={name}
      supportText={supportText}
      content={data === URLs.Rates_International && <InternationalSearch />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <RatesStats
          plan={"9p/min"}
          amount={"300"}
          supportText="LandLine"
          feature={"Sim Activated : 23/12/2023"}
          icon={DBImages.Telephone}
        />
        <RatesStats
          plan={"9p/min"}
          amount={"300"}
          supportText="Mobile"
          feature="Explore Plans"
          icon={DBImages.Wifi}
        />
        <RatesStats
          plan={"19p/min"}
          amount={"300"}
          supportText="Message"
          feature="2.56"
          more_feature="-0.91% this week"
          icon={DBImages.Message}
        />
      </div>
      <div>
        <h3 className="text-[18px] font-medium">Suggested for you</h3>
        <p className="text-[14px]">Save more with our international plans</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing
          plan={"3GB Data"}
          amount={"300"}
          features={["Internation Stufss", "Great Pricing"]}
        />
      </div>
    </DBHomeTemplate>
  );
}

export default Rates;
