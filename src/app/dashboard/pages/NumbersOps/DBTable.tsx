import Table from "../../components/table";
import { useFetchPendingSimsQuery } from "@/utils/redux/reducers/operations.reducers";
import useNumberOps from "./useNumberOps";
import usePagination from "@/app/sharedcomponents/pagination";
import { useState, useEffect } from "react";

export default function NumberOpsTable() {
  const [totalPages, setTotalPages] = useState(1);
  const { Pagination, currentPage, pageSize, tableNumbering } = usePagination({
    totalPages,
  });
  const {
    data: new_sims,
    isLoading: loading,
    error,
  } = useFetchPendingSimsQuery({
    page: currentPage,
    pageSize: pageSize, // Assuming you want 15 items per page
    simStatus: -1,
  });

  const { navigateToAssignNumber } = useNumberOps();

  useEffect(() => {
    if (new_sims?.result?.totalNumberOfPages) {
      setTotalPages(new_sims.result.totalNumberOfPages);
    }
  }, [new_sims]);

  if (loading) {
    return <p>Loading Records...</p>;
  }

  if (error) {
    return (
      <p>An error occurred while loading record. Refresh and try again.</p>
    );
  }

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
                  <td>{tableNumbering(index)}</td>
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
      <Pagination />
    </div>
  );
}
