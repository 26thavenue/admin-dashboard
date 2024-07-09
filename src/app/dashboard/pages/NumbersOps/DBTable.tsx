import Table from "../../components/table";
import { useFetchPendingSimsQuery } from "@/utils/redux/reducers/operations.reducers";
import usePagination from "@/app/sharedcomponents/pagination";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NumberOpsTable() {
  const [totalPages, setTotalPages] = useState(1);
  const { Pagination, currentPage, pageSize, tableNumbering } = usePagination({
    totalPages,
  });
  const {
    data: new_sims,
    isLoading: loading,
    error,
    refetch: refetchRecords,
  } = useFetchPendingSimsQuery({
    page: currentPage,
    pageSize: pageSize, // Assuming you want 15 items per page
    simStatus: -1,
  });

  const navigate = useNavigate();

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
      <p>
        An error occurred while loading record.{" "}
        <span
          className="cursor-pointer text-blue"
          onClick={() => refetchRecords()}
        >
          Refresh
        </span>{" "}
        and try again.
      </p>
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
                id: number
              },
              index: number
            ) => {
              console.log({ sim });
              return (
                <tr key={index}>
                  <td>{tableNumbering(index)}</td>
                  <td>{sim?.emailAddress}</td>
                  <td>{sim?.networkDescription}</td>
                  <td
                    onClick={() => navigate(`${sim.id}/assign`)}
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
