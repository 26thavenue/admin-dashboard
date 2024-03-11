import { Images } from "@/assets/images";
import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import PlansLeads from "@/landing/components/commons/leads/PlansLeads";
import SmartNetwork from "@/landing/components/commons/smartNetwork";

function TalkLonger() {
  const { Leads } = Images;

  const { Plans } = Leads;

  const { PleasedLady } = Plans;
  return (
    <SiteLayout>
      <PlansLeads
        leadText="GREAT VALUE PAY-AS-YOU-GO PLANS"
        heading="Stay in Control with Our PAYG Plans"
        supportText="Affordable SIM-only deals, no-contract plans with truly unlimited connectivity, minutes and SMS."
        image={PleasedLady}
      />
      <LandingPlans heading={""} supportText={""} page_source={false} />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default TalkLonger;
