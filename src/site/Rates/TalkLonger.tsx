import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";
import SmartNetwork from "@/landing/components/commons/smartNetwork";

function TalkLonger() {
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
      <LandingPlans heading={""} supportText={""} page_source={false} />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default TalkLonger;
