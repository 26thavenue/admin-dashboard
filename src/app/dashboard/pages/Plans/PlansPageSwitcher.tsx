import { URLs } from "../../../../utils/enums";

function PlansPageSwitcher(data: string) {
  let name;
  let supportText;

  switch (data) {
    case URLs.Plan_Monthly:
      name = "Monthly Plans";
      supportText =
        "For those who want continuous, truly unlimited connectivity. Explore our monthly plans and choose the one that best suits your needs.";
      break;

    case URLs.Plan_Data:
      name = "Data Plans";
      supportText =
        "Buy our flexible, no contract international calling plans to talk longer for less with Talk4 Mobile.";
      break;

    case URLs.Plan_International:
      name = "International Plans";
      supportText =
        "Buy our flexible, no contract international calling plans to talk longer for less with Talk4 Mobile.";
      break;

    case URLs.Plan_PayG:
      name = "PAYG Plans";
      supportText =
        "More bang for your buck. Explore our affordable PAYG deals that come with no commitments.";
      break;

    default:
      name = "Monthly Plans";
      supportText =
        "For those who want continuous, truly unlimited connectivity. Explore our monthly plans and choose the one that best suits your needs.";
      break;
  }
  return { name, supportText };
}

export default PlansPageSwitcher;
