import Faq from "@/landing/components/commons/faqs/faq";
import SmartNetwork from "@/landing/components/commons/smartNetwork";
import LandingPlans from "@/landing/components/commons/landingPlans/landingPlans";
import LandingTopUp from "@/landing/components/commons/LandingTopUp";
import FreeData from "@/landing/components/commons/FreeData";
import ProductsGroups from "@/landing/components/commons/productsGroups";
import ThinkSmart from "@/landing/components/commons/thinkSmart";
import SmartNetworkTrusted from "@/landing/components/commons/smartNetworkTrusted/smartNetWorkTrusted";
import NetworkDifferently from "@/landing/components/commons/networkDifferently";
import WhoAreWe from "@/landing/components/commons/whoAreWe";
import TransferNumber from "@/landing/components/commons/TransferNumber";
import HowToUse from "@/landing/components/commons/HowToUse";
import SpecialUKCallingRates from "@/landing/components/commons/specialUKCallingRates/specialUKCallingRates";
import InternationalRates from "@/landing/components/commons/InternationalCalls/internationalCalls";
import InternationalRatesBetween from "@/landing/components/commons/InternationalCalls/internationalCallsBetween";
import PhoneAbroad from "@/landing/components/commons/phoneAbroad";
import { Payment } from "@/landing/components/commons/payments";
import SiteLayout from "./layout";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";

function Resources() {
  return (
    <SiteLayout>
      <OthersLeads
        leadText={"Need Help?"}
        supportText={
          "We take great pride not only in providing you with a great mobile network, but also in offering you a friendly and helpful customer service experience."
        }
        heading={"Feel Free to Reach Out"}
      />
      <Payment />
      <PhoneAbroad />
      <InternationalRatesBetween />
      <InternationalRates />
      <SpecialUKCallingRates />
      <HowToUse />
      <TransferNumber />
      <WhoAreWe />
      <NetworkDifferently />
      <SmartNetworkTrusted />
      <ThinkSmart />
      <ProductsGroups />
      <FreeData />
      <LandingTopUp />
      <LandingPlans page_source={true} />
      <SmartNetwork />
      <Faq />
    </SiteLayout>
  );
}

export default Resources;
