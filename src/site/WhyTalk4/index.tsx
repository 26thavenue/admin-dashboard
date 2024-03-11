import "@/App.css";
import Faq from "@/landing/components/commons/faqs/faq";
import SiteLayout from "../layout";
import ThinkSmart from "@/landing/components/commons/thinkSmart";
import WhoAreWe from "@/landing/components/commons/whoAreWe";
import PicturedLeads from "@/landing/components/commons/leads/PicturedLeads";
import { Images } from "@/assets/images";

function WhyTalk4() {
  const { FriendsA } = Images;
  return (
    <>
      <SiteLayout>
        <PicturedLeads
          height="300px"
          image={FriendsA}
          supportText={
            "Each month, Now Mobile helps thousands of users connect using our blistering-fast data."
          }
          heading={"About Talk4 Mobile"}
        />
        <WhoAreWe />
        <ThinkSmart />
        <Faq />
      </SiteLayout>
    </>
  );
}

export default WhyTalk4;
