import Stats from "../../components/cards/stats";
import DBHomeTemplate from "../template";
import { DBImages } from "./DBImageImports";
// import DBTable from "./DBTable";

function DBHome() {
  return (
    <DBHomeTemplate
      name="Welcome, Super Admin"
      supportText="Welcome Back to Talk Watch Tower (Admin App)"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-[8px] bg-white shadow-md">
        <Stats
          plan={"50,000"}
          amount={"300"}
          supportText="5000 more from yesterday"
          feature={"Registered SIMs (Today)"}
          icon={DBImages.Calling}
        />
        <Stats
          plan={"500,000"}
          amount={"300"}
          supportText="5000 more from last month"
          feature={"Registered SIMs (Month)"}
          icon={DBImages.Calling}
        />
        <Stats
          plan={"300"}
          amount={"300"}
          supportText="2 more than yesterday"
          feature="Resolved Complains (Today)"
          icon={DBImages.Case}
        />
        <Stats
          plan={"Beta Network Plan"}
          amount={"300"}
          supportText="Better than PAYG"
          feature="Most Sold Product (Today)"
          icon={DBImages.Network}
        />
      </div>

      {/* <div className="bg-white p-6 rounded-[12px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-medium mb-5">Recent Orders</h3>
          <p>View Orders</p>
        </div>
        <DBTable />
      </div>
      <div className="bg-white p-6 rounded-[12px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-medium mb-5">Recent Transactions</h3>
          <p>View Transaction</p>
        </div>
        <DBTable />
      </div> */}
    </DBHomeTemplate>
  );
}

export default DBHome;
