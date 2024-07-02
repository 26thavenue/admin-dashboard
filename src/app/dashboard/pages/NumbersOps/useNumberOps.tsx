import { prefillNumberOpsModal } from "@/utils/redux/slices/operation.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useNumberOps() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToAssignNumber = ({
    sim,
  }: {
    sim: {
      emailAddress: string;
      networkDescription: string;
      network: number;
    };
  }) => {
    dispatch(prefillNumberOpsModal(sim));
    navigate(
      `${sim?.networkDescription}/${sim?.network}/${
        sim?.emailAddress
      }/${crypto.randomUUID()}/assign`
    );
  };
  return { navigateToAssignNumber };
}

export default useNumberOps;
