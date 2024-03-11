import { Images } from "@/assets/images";
import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import PlansLeads from "@/landing/components/commons/leads/PlansLeads";
import SmartNetwork from "@/landing/components/commons/smartNetwork";

function Payga() {
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
      <LandingPlans
        heading={"Higher Savings. Lower Phone Bills."}
        supportText={
          "Our monthly plans offer more data and even more value. Explore our monthly SIM-only deals and enjoy unthrottled, unlimited data."
        }
        page_source={true}
      />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default Payga;
