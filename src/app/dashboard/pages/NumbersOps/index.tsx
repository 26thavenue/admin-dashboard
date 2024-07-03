import { Button } from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import NumberOpsTable from "./DBTable";
import { toggleNumberOpsModal } from "@/utils/redux/slices/operation.slice";
import { useDispatch } from "react-redux";

export type TNumberOperations = {
  serialNumber: string;
  simNumber: string;
  emailAddress: string;
  network: number;
  mobileNumber?: string
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
      <div>
        <AddStaffAdmin />
      </div>
      <div className="bg-white p-6 rounded-[12px]">
        <NumberOpsTable />
      </div>
    </DBHomeTemplate>
  );
}

export default NumbersOperations;

function AddStaffAdmin() {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => dispatch(toggleNumberOpsModal({ isOpen: true }))}
        className="ml-auto block"
      >
        Assign SIM Card
      </Button>
    </>
  );
}
