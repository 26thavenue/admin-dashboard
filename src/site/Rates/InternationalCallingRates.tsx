import InternationalRates from "@/landing/components/commons/InternationalCalls/internationalCalls";
import SiteLayout from "../layout";
import Faq from "@/landing/components/commons/faqs/faq";
import ProductsGroups from "@/landing/components/commons/productsGroups";
import OthersLeads from "@/landing/components/commons/leads/OthersLeads";



function InternationalCallingRates() {
  return (
    <SiteLayout>
      <OthersLeads
        height="700px"
        leadText={"CHEAP NATIONAL CALLING RATES"}
        supportText={
          "With Talk4 Mobile you can enjoy high-quality, affordable international calls – starting from just 1p/min. Select a destination below to explore our calling rates."
        }
        heading={"Cheap International Calling Rates"}
      />
    
      <InternationalRates />
      <ProductsGroups />
      <Faq />
    </SiteLayout>
  );
}

export default InternationalCallingRates;
