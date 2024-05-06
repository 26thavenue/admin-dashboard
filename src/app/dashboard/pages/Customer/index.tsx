import { useGetCustomersQuery } from "@/utils/redux/reducers/customers.reducers";
import DBHomeTemplate from "../template";
import DBTable from "./DBTable";

function Customer() {
  const { data } = useGetCustomersQuery({
    pageSize: 10,
    page: 1,
    fromDate: "2022-01-01",
    toDate: "2025-12-31",
  });

  console.log({ data });
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

export default Customer;
