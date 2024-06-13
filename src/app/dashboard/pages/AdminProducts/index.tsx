import { Button } from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import DBTable from "./DBTable";
import { useNavigate } from "react-router-dom";

function AdminProducts() {
  const navigate = useNavigate()
  return (
    <DBHomeTemplate
      name="Product Management"
      supportText="Manage how customers interact with out products."
    >
      <div className="bg-white p-6 rounded-[12px]">
        <Button
          onClick={() => navigate("create")}
          className="w-fit block mr-0 ml-auto mb-4 mt-0"
        >
          Create Product
        </Button>
        <DBTable />
      </div>
    </DBHomeTemplate>
  );
}

export default AdminProducts;

