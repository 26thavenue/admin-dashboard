import { PhoneNumberCard } from "./index";
import DBHomeTemplate from "../template";
// import ToggleSwitch from "../../components/switch";
import { Button } from "../../../sharedcomponents/form";

function ConfirmTopUp() {
  return (
    <DBHomeTemplate
      name="Your Order Summary"
      supportText="Welcome Bank to Talk4 Mobile"
    >
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
        <div className="col-span-5 sm:col-span-3 rounded-[6px] bg-white  py-6 px-4">
          <h3 className="text-[18px] font-medium">Top Up</h3>
          <p>Order Details</p>
          <div className="flex gap-3 py-6 px-4 bg-[#FFEEF6] rounded-[11px] mt-5">
            <div>
              {/* <ToggleSwitch /> */}
            </div>
            <div>
              <h4 className="font-medium">Auto Top-Up is OFF</h4>
              <p className="font-light">
                Turning this on means you top-up will automatically we done
                after your current top up expires
              </p>
            </div>
          </div>
          <div className="table w-full mt-4">
            <div className="table-row">
              <div className="table-cell  p-2">
                <b>Top Up Amount</b>
              </div>
              <div className="table-cell  p-2">£10</div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-2">
                <b>Mode of Payment</b>
              </div>
              <div className="table-cell  p-2">
                Card <br /> 1223 **** **** ****
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-2">
                <b>Total</b>{" "}
              </div>
              <div className="table-cell  p-2">£10</div>
            </div>
            <div className="table-row">
              {/* <div className="table-cell p-2"> </div> */}
              <div className="table-cell  p-2 ">
                <Button>Confirm</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2">
          <PhoneNumberCard />
        </div>
      </div>
    </DBHomeTemplate>
  );
}

export default ConfirmTopUp;
