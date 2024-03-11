import OthersLeads from "@/landing/components/commons/leads/OthersLeads";
import SiteLayout from "../layout";
import HelpForm from "./HelpForm";



function Help() {
  return (
    <>
      <SiteLayout>
        <OthersLeads
        height={`h-80`}
          leadText={"Need Help?"}
          supportText={
            "We take great pride not only in providing you with a great mobile network, but also in offering you a friendly and helpful customer service experience."
          }
          heading={"Feel Free to Reach Out"}
        />
        <HelpForm />
      </SiteLayout>
    </>
  );
}

export default Help;
