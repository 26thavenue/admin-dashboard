import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import SmartNetwork from "@/landing/components/commons/smartNetwork";

function Paygb() {
  return (
    <SiteLayout>
      <LandingPlans
        heading={"Get Your Free SIM with a SIM-only Deal"}
        supportText={
          "Call more, save more with our exclusive SIM-only deals. Select a plan that fits your needs, order your free SIM, and stay connected with Now Mobile"
        }
        page_source={true}
      />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default Paygb;
