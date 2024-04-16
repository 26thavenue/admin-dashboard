import Table from "../../components/table";
import { useGetProductsQuery } from "@/utils/redux/reducers/products.reducers";
import { CurrencyFormatter } from "@/utils/resources/general";
import { Button } from "@/app/sharedcomponents/form";
import ClipLoader from "react-spinners/ClipLoader";

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
}

export default function DBTable() {
  const { data, isLoading: loading, error } = useGetProductsQuery({});

  console.log({ data, loading, error });


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
          {data?.result?.map((plan: MobilePlan, index: number) => (
            <tr>
              <td>{index + 1}</td>
              <td>{plan?.name}</td>
              <td>{plan?.networkDescription}</td>
              <td>{CurrencyFormatter(plan?.defaultPrice)}</td>
              <td>{plan?.productSku}</td>
              <td>{plan?.planSku}</td>
              <td>{plan?.tarrifTypeDescription}</td>
              <td>{plan?.ukVoiceAndSms}</td>
              <td>{plan?.ukeuMinutesAndSms}</td>
              <td>{plan?.data}</td>
              <td>{plan?.dataOptions}</td>
              <td>
                <Button className={`${plan?.isActive ? 'bg-green-600' : 'bg-red-600'}`} type="button" >{plan?.isActive ? "Active" : "Inactive"}</Button>
              </td>
              {/* <td>
                <div className="text-brand flex flex-row items-center justify-center w-fit cursor-pointer gap-2 ">
                  <IoEyeOutline />
                  <span>View More</span>
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
