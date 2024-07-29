import Table from "../../components/table";
import { useGetProductsPlansQuery } from "@/utils/redux/reducers/products.reducers";
import { CurrencyFormatter } from "@/utils/resources/general";
import ClipLoader from "react-spinners/ClipLoader";
import TableStatus from "@/app/sharedcomponents/tableActions";
import { useParams } from "react-router-dom";
import DBHomeTemplate from "../template";

interface MobilePlan {
  data: string;
  dataOptions: string;
  defaultPrice: number;
  isActive: boolean;
  name: string;
  network: number;
  networkDescription: string;
  planSku: string;
  productSku: string;
  tarrifType: number;
  tarrifTypeDescription: string;
  tftpCompatible: string;
  ukVoiceAndSms: string;
  ukeuMinutesAndSms: string;
  wtsCompatible: string;
  price: number;
}

export default function PlansTable() {
  const params = useParams();
  const { data, isLoading: loading } = useGetProductsPlansQuery({
    plan_sku: "",
  });

  
  
  const filteredPlans = () => {
    const plans = data?.result?.filter(
      (plan: MobilePlan) => params?.id === plan?.productSku
    );

    return plans;
  };

  if (loading) {
    return (
      <div className="h-screen grid place-content-center">
        <ClipLoader
          color={"#ff3793"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <DBHomeTemplate
      backUrl="/dashboard/products"
      name={`Plans for ${params?.name || "Your Plans"}`}
      supportText={`Manage Plans for ${params?.name}`}
    >
      {" "}
      <div className="bg-white p-6 rounded-[12px]">
        <div className="w-full overflow-scroll md:overflow-auto">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Network</th>
                <th>Price</th>
                <th>Product SKU</th>
                <th>Plan SKU</th>
                <th>Tarrif Type</th>
                <th>UK Voice & SMS</th>
                <th>UK-EU Minutes & SMS</th>
                <th>Data</th>
                <th>Data Option</th>
                <th>Status</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredPlans()?.map((plan: MobilePlan, index: number) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{plan?.name}</td>
                  <td>{plan?.networkDescription}</td>
                  <td>{CurrencyFormatter(plan?.price)}</td>
                  <td>{plan?.productSku}</td>
                  <td>{plan?.planSku}</td>
                  <td>{plan?.tarrifTypeDescription}</td>
                  <td>{plan?.ukVoiceAndSms}</td>
                  <td>{plan?.ukeuMinutesAndSms}</td>
                  <td>{plan?.data}</td>
                  <td>{plan?.dataOptions}</td>
                  <td>
                    <TableStatus status={plan?.isActive} />
                  </td>
                  {/* <td
                    onClick={() =>
                      navigate(`./${plan?.productSku}/${plan?.name}`)
                    }
                    className="text-blue cursor-pointer"
                  >
                    Add Plan
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </DBHomeTemplate>
  );
}
