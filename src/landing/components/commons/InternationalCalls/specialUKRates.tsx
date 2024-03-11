import { Images } from "../../../../assets/images";

const { ukRates } = Images;
const { PhoneCall, LandLineTelephone, WifiNetwork } = ukRates;

export const TrustedNetworks = [
  {
    name: "LandLine",
    button: "Free",
    support: "No contracts, no limits. Get affordable PAYG or monthly plans.",
    img: PhoneCall,
  },
  {
    name: "NMobile",
    button: "10p/min",
    support:
      "Switching to Talk4 Mobile is easy - Bring your original number with hassle free port in.",
    img: LandLineTelephone,
  },
  {
    name: "Messages",
    button: "15p/min",
    support:
      "Hassle free sign up - No credit checks required, order your free PAYG SIM in a minute.",
    img: WifiNetwork,
  },
];
