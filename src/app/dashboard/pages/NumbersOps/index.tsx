import DBHomeTemplate from "../template";
import NumberOpsTable from "./DBTable";

export type TNumberOperations = {
  serialNumber: string;
  simNumber: string;
  emailAddress: string;
  network: number;
  mobileNumber?: string;
  id: number;
};

export type TNumbDetails = {
  emailAddress: string;
  network: number;
};

function NumbersOperations() {
  return (
    <DBHomeTemplate
      name="Number Operations"
      supportText="Manage how phone numbers are allocated and managed."
    >
      <div className="bg-white p-6 rounded-[12px]">
        <NumberOpsTable />
      </div>
    </DBHomeTemplate>
  );
}

export default NumbersOperations;
