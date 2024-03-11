import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import PhoneAbroad from "@/landing/components/commons/phoneAbroad";
import HowToUse from "@/landing/components/commons/HowToUse";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";
import InternationalRatesBetween from "@/landing/components/commons/InternationalCalls/internationalCallsBetween";

function RoamingRates() {
  return (
    <SiteLayout>
      <OthersLeads
        height="320px"
        headingWidth="470px"
        supportTextWidth="100px"
        leadText={"CHEAP NATIONAL CALLING RATES"}
        supportText={
          "Easy and affordable connectivity beyond borders. Explore our affordable roamingrates to stay connected to your loved ones without breaking your bank."
        }
        heading={"Roam Freely with Talk4 Mobile"}
      />
      <InternationalRatesBetween />
      <PhoneAbroad />
      <HowToUse />
      <Faq />
    </SiteLayout>
  );
}

export default RoamingRates;
