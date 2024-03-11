import { IoEyeOutline } from "react-icons/io5";
import Table from "../../components/table";
import { GoDotFill } from "react-icons/go";

export default function DBTable() {
  return (
    <div className="w-full overflow-scroll md:overflow-auto">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Order Details</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#0123</td>
            <td>25th Dec. 2023</td>
            <td>Product | product</td>
            <td>
              <div className="shadow-md flex flex-row items-center justify-center w-fit px-3 gap-2 rounded-[8px]">
                <GoDotFill />
                <span>Active</span>
              </div>
            </td>
            <td>000000</td>
            <td>
              <div className="text-brand flex flex-row items-center justify-center w-fit  gap-2 ">
                <IoEyeOutline />
                <span>View More</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>#0123</td>
            <td>25th Dec. 2023</td>
            <td>Product | product</td>
            <td>
              <div className="shadow-md flex flex-row items-center justify-center w-fit px-3 gap-2 rounded-[8px]">
                <GoDotFill />
                <span>Active</span>
              </div>
            </td>
            <td>000000</td>
            <td>
              <div className="text-brand flex flex-row items-center justify-center w-fit gap-2 ">
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
