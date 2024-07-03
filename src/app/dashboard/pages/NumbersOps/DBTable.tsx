import Table from "../../components/table";
import { useFetchPendingSimsQuery } from "@/utils/redux/reducers/operations.reducers";
import useNumberOps from "./useNumberOps";

export default function NumberOpsTable() {
  const { data: new_sims } = useFetchPendingSimsQuery({
    page: 1,
    pageSize: 10000,
    simStatus: -1,
  });

  const { navigateToAssignNumber } = useNumberOps();

  console.log({ new_sims });

  return (
    <div className="w-full overflow-scroll md:overflow-auto">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Network</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {new_sims?.result?.results?.map?.(
            (
              sim: {
                emailAddress: string;
                networkDescription: string;
                network: number;
              },
              index: number
            ) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{sim?.emailAddress}</td>
                  <td>{sim?.networkDescription}</td>
                  <td
                    onClick={() => navigateToAssignNumber({ sim })}
                    className="text-blue cursor-pointer"
                  >
                    Assign SIM
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}
