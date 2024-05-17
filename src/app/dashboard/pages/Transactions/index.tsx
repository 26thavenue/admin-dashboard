import DBHomeTemplate from "../template";
import DBTable from "./DBTable";

function Transactions() {
  return (
    <DBHomeTemplate
      name="Transactions"
      supportText="Overview of All Transactions"
    >
      <div className="bg-white p-6 rounded-[12px]">
        <DBTable />
      </div>
    </DBHomeTemplate>
  );
}

export default Transactions;
