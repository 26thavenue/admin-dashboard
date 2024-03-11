import DBHomeTemplate from "../template";
// import ToggleSwitch from "../../components/switch";
import { Button } from "../../../sharedcomponents/form";
import { PhoneNumberCard } from "../TopUp";

function AccessControlView() {
  return (
    <DBHomeTemplate name="Boris Rivera" supportText="Finance | Super Admin">
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
        <div className="col-span-5 sm:col-span-3 rounded-[6px] bg-white  py-6 px-4">
          <h3 className="text-[18px] font-medium">All About Boris</h3>

          {/* <div className="flex gap-3 py-6 px-4 bg-[#FFEEF6] rounded-[11px] mt-5">

            <div>
              <h4 className="font-medium">Auto Top-Up is OFF</h4>
              <p className="font-light">
                Turning this on means you top-up will automatically we done
                after your current top up expires
              </p>
            </div>
          </div> */}
          <div className="flex flex-col w-full mt-4 gap-5">
            <div className="table-row">
              <div className="table-cell  p-0">
                <b>Status</b>
              </div>
              <div className="table-cell  p-0">Active</div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-0">
                <b>Comments</b>
              </div>
              <div className="table-cell  p-0"></div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-0">
                <b>Date Created</b>
              </div>
              <div className="table-cell  p-0">25th Dec. 2023</div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-0">
                <b>Last Login Date</b>
              </div>
              <div className="table-cell  p-0">25th Dec. 2023</div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-0">
                <b>Other Records</b>
              </div>
              <div className="table-cell  p-0"></div>
            </div>
            <div className="table-row">
              <div className="table-cell  p-0">
                <b>Other Records</b>
              </div>
              <div className="table-cell  p-0"></div>
            </div>
            <div className="">
              <div className="mt-10 flex flex-row gap-5 ">
                <Button>Disable Access</Button>
                <Button className="bg-brand">Edit</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 gap-3 sm:col-span-2">
          <PhoneNumberCard hasImage={false} name="Phone Number" />
          <PhoneNumberCard
            hasImage={false}
            name="Email Address"
            details={"email@email.com"}
          />
        </div>
      </div>
    </DBHomeTemplate>
  );
}

export default AccessControlView;
