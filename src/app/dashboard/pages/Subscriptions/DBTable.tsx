import PageLoader from "@/app/sharedcomponents/pageLoader";
import Table from "../../components/table";
import TableStatus from "@/app/sharedcomponents/tableActions";
import { useGetSubscriptionsQuery } from "@/utils/redux/reducers/finances.reducers";
import { CurrencyFormatter, FormatDateTime } from "@/utils/resources/general";
import { getNetworkDescription } from "@/utils/resources/getNetworkDescription";

export default function DBTable() {
  const { data, isLoading: loading } = useGetSubscriptionsQuery({
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
            <th>Payment Date</th>
            <th>Activation Date</th>
            <th>End Expiry Date</th>
            <th>Email Address</th>
            <th>Network</th>
            <th>Plan</th>
            <th>Phone Number</th>
            <th>Serial Number</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.result?.results?.map(
            (
              data: Record<string, string | boolean | number>,
              index: number
            ) => {
              console.log({ data });
              const {
                email,
                network,
                plan,
                serialNumber,
                simNumber,
                amount,
                isActive,
                activationDate,
                expiryDate,
                paymentDate,
              } = data;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{FormatDateTime(paymentDate as string)}</td>
                  <td>{FormatDateTime(activationDate as string)}</td>
                  <td>{FormatDateTime(expiryDate as string)}</td>
                  <td>{email}</td>
                  <td>{getNetworkDescription(network as number)}</td>
                  <td>{plan}</td>
                  <td>{simNumber}</td>
                  <td>{serialNumber}</td>
                  <td>{CurrencyFormatter(amount as number)}</td>
                  <td>
                    <TableStatus status={isActive as boolean} />{" "}
                  </td>

                  <td></td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}
