import { DBImages } from "../DBHome/DBImageImports";
import DBHomeTemplate from "../template";
import { TopUpPaymentOptions } from "./TopUpOptions";

export function PhoneNumberCard({
  name,
  details,
  hasImage
}: {
  name?: string;
  details?: string;
  hasImage?: boolean
}) {
  return (
    <div className="bg-white py-6 px-4 rounded-[6px] flex items-center justify-between">
      <div>
        <p>{name || "Your Phone Number"}</p>
        <h3 className="text-[18px] font-medium">
          {details || "4447965248921"}
        </h3>
      </div>
      {hasImage !== false && <img src={DBImages.Card} alt="img" />}
    </div>
  );
}

function TopUp() {
  return (
    <DBHomeTemplate
      name="Top Up your SIM card"
      supportText="Welcome Bank to Talk4 Mobile"
    >
      <h3 className="text-[18px] font-medium">
        How much would you like to top-up?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <PhoneNumberCard />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <input
            type="button"
            className="bg-white rounded-[8px] px-1 py-2"
            value="EA"
          />
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-blue text-white rounded-[8px] px-1 py-2">
            Top Up
          </button>
        </div>
      </div>

      <h3 className="text-[18px] font-medium">
        How would you like to be charged?
      </h3>
      <TopUpPaymentOptions />
      {/* <TopUpModalFlips /> */}
    </DBHomeTemplate>
  );
}

export default TopUp;
