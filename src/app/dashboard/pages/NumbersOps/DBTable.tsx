import Table from "../../components/table";
import { useFetchPendingSimsQuery } from "@/utils/redux/reducers/operations.reducers";
import { useDispatch } from "react-redux";
import { prefillNumberOpsModal } from "@/utils/redux/slices/operation.slice";

export default function NumberOpsTable() {
  const { data: new_sims } = useFetchPendingSimsQuery({
    page: 1,
    pageSize: 10000,
    simStatus: -1,
  });

  const dispatch = useDispatch();

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
                    onClick={() => dispatch(prefillNumberOpsModal(sim))}
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
