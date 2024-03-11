import { IoEyeOutline } from "react-icons/io5";
import Table from "../../components/table";
import { useNavigate } from "react-router-dom";

export default function DBTable() {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-scroll md:overflow-auto">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Product Class</th>
            <th>Lines Count</th>
            <th>Subcription Count</th>
            <th>Date Created</th>
            <th>Last Login Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => navigate("1/admin")}>
            <td>1</td>
            <td>Kiefer Sutherland</td>
            <td>Talk4 Everyone</td>
            <td>2</td>
            <td>3</td>
            <td>25th Dec. 2023</td>
            <td>25th Dec. 2023</td>
            <td>
              <div className="text-brand flex flex-row items-center justify-center w-fit cursor-pointer gap-2 ">
                <IoEyeOutline />
                <span>View More</span>
              </div>
            </td>
          </tr>
          <tr onClick={() => navigate("1/admin")}>
            <td>2</td>
            <td>Jack Bauer</td>
            <td>Talk4 Mobile</td>
            <td>2</td>
            <td>3</td>
            <td>25th Dec. 2023</td>
            <td>25th Dec. 2023</td>
            <td>
              <div className="text-brand flex flex-row items-center justify-center w-fit cursor-pointer gap-2 ">
                <IoEyeOutline />
                <span>View More</span>
              </div>
            </td>
          </tr>
          <tr onClick={() => navigate("1/admin")}>
            <td>3</td>
            <td>Tom Krikman</td>
            <td>Talk4 Business</td>
            <td>2</td>
            <td>3</td>
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
