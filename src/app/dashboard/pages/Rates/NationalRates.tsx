import { useMatches } from "react-router-dom";
import DBHomeTemplate from "../template";
import PlansPageSwitcher from "./RatesPageSwitcher";
import { URLs } from "../../../../utils/enums";
import NationalRateCard from "../../components/cards/national_rates";
import InternationalSearch from "../../components/cards/country_search/InternationalSearch";

function NationalRates() {
  const matches = useMatches();
  const data = matches[4]?.pathname?.split("/")?.[3];
  const { name, supportText } = PlansPageSwitcher(data);

  return (
    <DBHomeTemplate
      name={name}
      supportText={supportText}
      content={data === URLs.Rates_International && <InternationalSearch />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <NationalRateCard plan={"3GB Data"} amount={"300"} />
       
      </div>
    </DBHomeTemplate>
  );
}

export default NationalRates;
