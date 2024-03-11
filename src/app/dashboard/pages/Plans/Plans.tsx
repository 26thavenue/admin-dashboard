import { useMatches } from "react-router-dom";
import Pricing from "../../components/cards/pricing";
import DBHomeTemplate from "../template";
import PlansPageSwitcher from "./PlansPageSwitcher";
import { URLs } from "../../../../utils/enums";
import InternationalSearch from "../../components/cards/country_search/InternationalSearch";

function Plans() {
  const matches = useMatches();
  const data = matches[4]?.pathname?.split("/")?.[3];
  const { name, supportText } = PlansPageSwitcher(data);

  return (
    <DBHomeTemplate
      name={name}
      supportText={supportText}
      content={data === URLs.Plan_International && <InternationalSearch />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing
          plan={"3GB Data"}
          amount={"300"}
          features={["Internation Stufss", "Great Pricing"]}
        />
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing plan={"3GB Data"} amount={"300"} />
        <Pricing
          plan={"3GB Data"}
          amount={"300"}
          features={["Internation Stufss", "Great Pricing"]}
        />
        <Pricing
          plan={"3GB Data"}
          amount={"300"}
          features={["Internation Stufss", "Great Pricing"]}
        />
      </div>
    </DBHomeTemplate>
  );
}

export default Plans;
