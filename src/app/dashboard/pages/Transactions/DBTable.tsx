import PageLoader from "@/app/sharedcomponents/pageLoader";
import Table from "../../components/table";
import { useGetTransactionsQuery } from "@/utils/redux/reducers/finances.reducers";
import { CurrencyFormatter } from "@/utils/resources/general";

export default function DBTable() {
  const { data, isLoading: loading} = useGetTransactionsQuery({
    pageSize: 10,
    page: 1,
    fromDate: "2022-01-01",
    toDate: "2025-12-31",
  });



  if (loading) {
    return <PageLoader loading={loading} />;
  }



  return (
    <div className="w-full overflow-scroll md:overflow-auto">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Reference</th>
            <th>Subscription</th>
            <th>Sim Number</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data?.result?.results?.map(
            (
              data: Record<string, string | boolean | number>,
              index: number
            ) => {
              const { paymentReference, userPlan, simNumber, paidAmount } =
                data;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{paymentReference}</td>
                  <td>{userPlan}</td>
                  <td>{simNumber}</td>
                  <td>{CurrencyFormatter(paidAmount as number)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}
