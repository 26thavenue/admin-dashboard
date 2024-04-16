import { IoEyeOutline } from "react-icons/io5";
import Table from "../../components/table";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/utils/redux/reducers/products.reducers";

export default function DBTable() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetProductsQuery({});

  console.log({ data, isLoading, error });
  return (
    <div className="w-full overflow-scroll md:overflow-auto">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Date Created</th>
            <th>Last Login Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => navigate("1/admin")}>
            <td>1</td>
            <td>Boris Rivera</td>
            <td>Finance</td>
            <td>Super Admin</td>
            <td>25th Dec. 2023</td>
            <td>25th Dec. 2023</td>
            <td>
              <div className="text-brand flex flex-row items-center justify-center w-fit cursor-pointer gap-2 ">
                <IoEyeOutline />
                <span>View More</span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
