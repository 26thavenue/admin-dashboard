import "@/App.css";
import Faq from "@/landing/components/commons/faqs/faq";
import SiteLayout from "../layout";
import ProductsGroups from "@/landing/components/commons/productsGroups";
import SmartNetworkTrusted from "@/landing/components/commons/smartNetworkTrusted/smartNetWorkTrusted";
import NetworkDifferently from "@/landing/components/commons/networkDifferently";
import PicturedLeads from "@/landing/components/commons/leads/PicturedLeads";
import { Images } from "@/assets/images";

function WhyUs() {
  const { FriendsB } = Images;
  return (
    <>
      <SiteLayout>
        <PicturedLeads
          image={FriendsB}
          leadText={"WHY TALK4 MOBILE"}
          supportText={"Get the widest network coverage in the UK."}
          heading={"Great Value for Money – Connect with Freedom"}
        />
        <NetworkDifferently />
        <SmartNetworkTrusted />
        <ProductsGroups />
        <Faq />
      </SiteLayout>
    </>
  );
}

export default WhyUs;
