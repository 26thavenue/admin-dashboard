// import { IoEyeOutline } from "react-icons/io5";
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
            <th>Email Address</th>
            <th>Username </th>
            <th>Signup Date</th>
            {/* <th>Date Created</th> */}
            <th>Last Login Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => navigate("1/admin")}>
            <td>1</td>
            <td>B@gmail.com</td>
            <td>Boris25</td>
            {/* <td>Super Admin</td> */}
            <td>25th Dec. 2023</td>
            <td>14th April. 2024</td>
            <td>active</td>
          </tr>
           <tr onClick={() => navigate("1/admin")}>
            <td>1</td>
            <td>Tomiwa@gmail.com</td>
            <td>Tmac452</td>
            {/* <td>Super Admin</td> */}
            <td>2nd Oct. 2023</td>
            <td>25th July. 2024</td>
            <td>active</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
