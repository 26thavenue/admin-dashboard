import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import SmartNetwork from "@/landing/components/commons/smartNetwork";

function LandingPagePlan() {
  return (
    <SiteLayout>
      <LandingPlans
        heading={"Enjoy Zero Commitments with Our PAYG Plans"}
        supportText={
          "Pocket-friendly PAYG plans, no commitments, truly unlimited connectivity. Always stay connected with affordable pay-as-you-go deals."
        }
        page_source={true}
      />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default LandingPagePlan;
