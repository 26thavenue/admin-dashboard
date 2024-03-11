import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";
import SmartNetwork from "@/landing/components/commons/smartNetwork";
import SpecialUKCallingRates from "@/landing/components/commons/specialUKCallingRates/specialUKCallingRates";



function LandingPageRates() {
  return (
    <SiteLayout>
      <OthersLeads
      height="320px"
        leadText={"CHEAP NATIONAL CALLING RATES"}
        supportText={
          "Enjoy free calls between the same network, free texts, and the most affordable local callcharges on mobile & landline starting from 1p/min."
        }
        heading={"Call Anyone, Anywhere in the UK from 1p/min"}
      />
      <SpecialUKCallingRates />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default LandingPageRates;
