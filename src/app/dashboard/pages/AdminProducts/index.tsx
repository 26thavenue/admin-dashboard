import DBHomeTemplate from "../template";
import DBTable from "./DBTable";

function AdminProducts() {
  return (
    <DBHomeTemplate
      name="Product Management"
      supportText="Manage how customers interact with out products."
    >
      <div className="bg-white p-6 rounded-[12px]">
        <DBTable />
      </div>
    </DBHomeTemplate>
  );
}

export default AdminProducts;
