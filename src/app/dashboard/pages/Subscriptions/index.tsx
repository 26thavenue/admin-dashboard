import DBHomeTemplate from "../template";
import DBTable from "./DBTable";

function Subscriptions() {
 


  return (
    <DBHomeTemplate
      name="Subscriptions"
      supportText="Overview of Talk4 subscriptions of customers "
    >
      <div className="bg-white p-6 rounded-[12px]">
        <DBTable/>
      </div>
    </DBHomeTemplate>
  );
}

export default Subscriptions;
