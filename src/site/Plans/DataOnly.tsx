import { Images } from "@/assets/images";
import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import SmartNetwork from "@/landing/components/commons/smartNetwork";
import PlansLeads from "@/landing/components/commons/leads/PlansLeads";

function DataOnly() {
  const { Leads } = Images;

  const { Plans } = Leads;

  const { PleasedMan } = Plans;

  return (
    <SiteLayout>
      <PlansLeads
        isBolt={true}
        supportText="Want more data? Get a PAYG data bolt-on plan today."
        image={PleasedMan}
        heading={"Data Bolt-ons with No Throttling or Daily Caps"}
        leadText="DATA-ONLY PAYG PLANS"
      />
      <LandingPlans
        heading={"Get Extra Data When You Need It Most"}
        supportText={
          "Our data bolt-ons are ideal when you need additional blistering-fast data connectivity."
        }
        page_source={true}
      />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default DataOnly;
