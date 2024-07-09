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
  const [selectStatus, setSelectStatus] = useState<number | string>(-1);
  const {
    data: new_sims,
    isLoading: loading,
    isFetching: fetching,
    error,
    refetch: refetchRecords,
  } = useFetchPendingSimsQuery({
    page: currentPage,
    pageSize: pageSize,
    simStatus: Number(selectStatus),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (new_sims?.result?.totalNumberOfPages) {
      setTotalPages(new_sims.result.totalNumberOfPages);
    }
  }, [new_sims]);

  const SelectSIMStatus = () => {
    return (
      <select
        value={selectStatus}
        className="px-4 py-2 rounded border border-gray-300 text-base mb-4"
        onChange={(e) => setSelectStatus(e.target.value as string)}
      >
        <option value={-1}>Not Allocated</option>
        <option value={0}>Pending Activation</option>
        <option value={1}>Activated</option>
      </select>
    );
  };

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
      <SelectSIMStatus />
      {fetching && <p>Updating Records...</p>}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Network</th>
            <th>Status</th>
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
                id: number;
                simStatusDescription: string;
              },
              index: number
            ) => {
              console.log({ sim });
              return (
                <tr key={index}>
                  <td>{tableNumbering(index)}</td>
                  <td>{sim?.emailAddress}</td>
                  <td>{sim?.networkDescription}</td>
                  <td>{sim?.simStatusDescription}</td>
                  {selectStatus === -1 ? (
                    <td
                      onClick={() => navigate(`${sim.id}/assign`)}
                      className="text-blue cursor-pointer"
                    >
                      Assign SIM
                    </td>
                  ) : (
                    <td
                      onClick={() => navigate(`${sim.id}/assign`)}
                      className="text-blue cursor-pointer"
                    >
                      View Customer
                    </td>
                  )}
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
