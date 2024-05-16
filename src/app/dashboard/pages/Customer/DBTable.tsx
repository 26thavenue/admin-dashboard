import Table from "../../components/table";
import { useGetCustomersQuery } from "@/utils/redux/reducers/customers.reducers";
import TableStatus from "@/app/sharedcomponents/tableActions";

export default function DBTable() {
  const { data } = useGetCustomersQuery({
    pageSize: 10,
    page: 1,
    fromDate: "2022-01-01",
    toDate: "2025-12-31",
  });
  return (
    <div className="w-full overflow-scroll md:overflow-auto">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Profile Status</th>
            <th>Onboarding Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.result?.results?.map(
            (data: Record<string, string | boolean>, index: number) => {
              console.log({ data });
              const {
                firstName,
                lastName,
                emailAddress,
                isActive,
                // profileStatus,
                // onbaordingStatus,
              } = data;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{emailAddress}</td>
                  <td>
                    <TableStatus status={isActive as boolean} />{" "}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
      {/* <div className="flex items-center justify-between mt-4">
        <p className="text-grey-body">
          Showing <b>1</b> - <b>10</b> from <b>100</b> records
        </p>
        <div>Page</div>
      </div> */}
    </div>
  );
}
