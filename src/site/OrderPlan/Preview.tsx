import "@/App.css";
import Faq from "@/landing/components/commons/faqs/faq";
import SiteLayout from "../layout";
import { Payment } from "@/landing/components/commons/payments";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";

function OrderPreview() {
  return (
    <>
      <SiteLayout>
        <OthersLeads
          leadText={"JOIN Talk4mobile today"}
          heading={"Order your free Pay-as-you go SIM"}
          supportText={
            "Order a free SIM from Now Mobile. We deliver the next workingday and won’t charge you a penny."
          }
          height={`h-80`}
        />
        <Payment />
        <Faq />
      </SiteLayout>
    </>
  );
}

export default OrderPreview;
