import "@/App.css";
import Faq from "@/landing/components/commons/faqs/faq";
import SiteLayout from "../layout";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import SmartNetwork from "@/landing/components/commons/smartNetwork";
import PlansLeads from "@/landing/components/commons/leads/PlansLeads";
import { Images } from "@/assets/images";

function OrderPayments() {
  const { Leads } = Images;

  const { Plans } = Leads;

  const { OtherPleasedWoman } = Plans;
  return (
    <>
      <SiteLayout>
        <PlansLeads
          supportText="Order a free PAYG SIM from Now Mobile. We deliver the next working day andwon’t charge you a penny."
          image={OtherPleasedWoman}
          heading={"Join Talk4 Mobile Today"}
          leadText="ORDER YOUR FREE PAY-AS-YOU-GO SIM"
        />
        <LandingPlans
          heading="Get Your Free SIM with a SIM-only Deal"
          supportText="Call more, save more with our exclusive SIM-only deals. Select a plan that fits your needs, order your free SIM, and stay connected with Now Mobile"
          page_source={false}
        />
        <SmartNetwork />
        <Faq />
      </SiteLayout>
    </>
  );
}

export default OrderPayments;
