import DBHomeTemplate from "../template";
import DBTable from "./DBTable";

function Customer() {
  return (
    <DBHomeTemplate
      name="Customers"
      supportText="Manage how customers interact with this Talk4 products"
    >
      <div className="bg-white p-6 rounded-[12px]">
        <DBTable />
      </div>
    </DBHomeTemplate>
  );
}

export default Customer


