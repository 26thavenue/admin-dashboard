import "@/App.css";
import Faq from "@/landing/components/commons/faqs/faq";
import SiteLayout from "../layout";
import FreeData from "@/landing/components/commons/FreeData";
import TransferNumber from "@/landing/components/commons/TransferNumber";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";

function Transfer() {
  return (
    <>
      <SiteLayout>
        <OthersLeads
          height="320px"
          leadText={"CHEAP NATIONAL CALLING RATES"}
          supportText={
            "Looking to switch to Talk4 Mobile? We couldn’t be happier! Port yournumber to the Talk4 network and get free 1GB data."
          }
          heading={"Transfer your Mobile Number to Talk4 Mobile"}
        />
        <TransferNumber />
        <FreeData />
        <Faq />
      </SiteLayout>
    </>
  );
}

export default Transfer;
