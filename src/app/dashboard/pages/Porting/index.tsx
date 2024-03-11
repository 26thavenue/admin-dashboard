import { DBImages } from "../DBHome/DBImageImports";
import Emptystate from "../emptystate";
import DBHomeTemplate from "../template";
import { TopUpPaymentOptions } from "./PortingOptions";

export function PhoneNumberCard() {
  return (
    <div className="bg-white py-6 px-4 rounded-[6px] flex items-center justify-between">
      <div>
        <p>Your Phone Number</p>
        <h3 className="text-[18px] font-medium">4447965248921</h3>
      </div>
      <img src={DBImages.Card} alt="img" />
    </div>
  );
}

function Porting() {
  return (
    <DBHomeTemplate
      name="Porting Details"
      supportText="Port In or Port Out of Talk4 Mobile"
    >
      <Emptystate
        cta={<TopUpPaymentOptions />}
        heading="No porting history found."
        supportText="You currently don’t have a porting history, click the button below to either Port In or Port Out"
      />
    </DBHomeTemplate>
  );
}

export default Porting;
