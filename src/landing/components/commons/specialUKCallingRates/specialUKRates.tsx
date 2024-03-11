import { Images } from "../../../../assets/images";

const { ukRates } = Images;
const {
  PhoneCall,
  TextMessages,
  VoiceMessages,
  CustomerService,
  CustomerSupport,
  CallEmergencyService,
  LandLineTelephone,
  WifiNetwork,
  ChatBubble,
  WifiSignal,
  Multimedia,
  PhoneIcon,
  RoundedPhone,
  PhoneBook,
} = ukRates;

export const TrustedNetworks = [
  {
    name: "Talk4 Mobile calls between the same network",
    button: "Free",
    support: "No contracts, no limits. Get affordable PAYG or monthly plans.",
    img: PhoneCall,
  },
  {
    name: "Talk4 Mobile texts on the same network",
    button: "Free",
    support:
      "No more hefty bills - always get the best local & international rates.",
    img: TextMessages,
  },
  {
    name: "Voicemail",
    button: "Free",
    support:
      "Get superfast data connectivity minus suffocating daily caps or throttling.",
    img: VoiceMessages,
  },
  {
    name: "Talk4 Mobile customer services - 669",
    button: "Free",
    support:
      "Cash in the locked in term prices, no hidden fees and plans offering free EU Roaming.",
    img: CustomerService,
  },

  {
    name: "Freephone service - 0800",
    button: "Free",
    support:
      "We're proudly powered by EE. Enjoy strong connectivity, no matter where you are in the UK.",
    img: CustomerSupport,
  },
  {
    name: "Emergency services - 111, 101, 105, 112",
    button: "Free",
    support:
      "True flexibility - No more long-term contracts. Get what you want with our SIM-only deals.",
    img: CallEmergencyService,
  },
  {
    name: "National Landline",
    button: "10p/min",
    support:
      "Switching to Talk4 Mobile is easy - Bring your original number with hassle free port in.",
    img: LandLineTelephone,
  },
  {
    name: "Other mobile networks",
    button: "15p/min",
    support:
      "Hassle free sign up - No credit checks required, order your free PAYG SIM in a minute.",
    img: WifiNetwork,
  },
  {
    name: "Text messages",
    button: "5p/message",
    support: "No contracts, no limits. Get affordable PAYG or monthly plans.",
    img: ChatBubble,
  },
  {
    name: "Data",
    button: "1p/MB",
    support:
      "No more hefty bills - always get the best local & international rates.",
    img: WifiSignal,
  },
  {
    name: "Multimedia Messages",
    button: "25p/message",
    support:
      "Get superfast data connectivity minus suffocating daily caps or throttling.",
    img: Multimedia,
  },
  {
    name: "0843",
    button: "15p/min",
    support:
      "Cash in the locked in term prices, no hidden fees and plans offering free EU Roaming.",
    img: PhoneIcon,
  },

  {
    name: "0844",
    button: "15p/min",
    support:
      "We're proudly powered by EE. Enjoy strong connectivity, no matter where you are in the UK.",
    img: RoundedPhone,
  },
  {
    name: "UK telephone number for a US-owned directory enquiries provider",
    button: "£2.50/min",
    support:
      "True flexibility - No more long-term contracts. Get what you want with our SIM-only deals.",
    img: PhoneBook,
  },
];
