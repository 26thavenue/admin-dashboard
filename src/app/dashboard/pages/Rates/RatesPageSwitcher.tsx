import { URLs } from "../../../../utils/enums";

function PlansPageSwitcher(data: string) {
  let name;
  let supportText;

  switch (data) {
    case URLs.Rates_International:
      name = "International Rates";
      supportText =
        "Explore affordable calling and texting rates to over 240 destinations worldwide.";
      break;

    case URLs.Rates_National:
      name = "National Rates";
      supportText =
        "Explore affordable calling, texting and data rates for the UK with Now Mobile.";
      break;

    case URLs.Rates_Roaming:
      name = "Roaming Rates";
      supportText =
        "Buy our flexible, no contract roaming calling plans to talk longer for less with Talk4 Mobile.";
      break;

    default:
      name = "International Rates";
      supportText =
        "Explore affordable calling and texting rates to over 240 destinations worldwide.";
      break;
  }
  return { name, supportText };
}

export default PlansPageSwitcher;
