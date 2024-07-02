import {
  Button,
  Form,
  FormInput,
  FormSelect,
} from "@/app/sharedcomponents/form";
import DBHomeTemplate from "../template";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useCreateSimMutation } from "@/utils/redux/reducers/operations.reducers";
import GlobalModal from "@/app/sharedcomponents/modals/GlobalModal";
import NumberOpsTable from "./DBTable";
import { useSelector } from "react-redux";
import {
  operationsSelector,
  toggleNumberOpsModal,
} from "@/utils/redux/slices/operation.slice";
import { useDispatch } from "react-redux";

export type TNumberOperations = {
  serialNumber: string;
  simNumber: string;
  emailAddress: string;
  network: number;
};

export type TNumbDetails = {
  emailAddress: string;
  network: number;
};

function AssignNumberOperations() {
  return (
    <DBHomeTemplate
      name="Number Operations"
      supportText="Manage how phone numbers are allocated and managed."
    >
      
      <div className="bg-white p-6 rounded-[12px]">
        <AssignNumber />
      </div>
    </DBHomeTemplate>
  );
}

export default AssignNumberOperations;

function AssignNumber() {
  const [createSimCard, { isLoading: loading }] = useCreateSimMutation();
  const num_ops = useSelector(operationsSelector);
  const dispatch = useDispatch();
  console.log({ num_ops }, { ...num_ops?.number_ops });
  // const [isOpen, setIsOpen] = useState(false);
  const formMethods = useForm<TNumberOperations>({
    mode: "all",
    defaultValues: {
      ...num_ops?.number_ops,
    },
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isValid },
  } = formMethods;

  console.log("watch", watch());

  const submit: SubmitHandler<TNumberOperations> = async (data) => {
    const response = await createSimCard({
      ...data,
      network: Number(data?.network),
    });

    if (response) {
      reset();
    }

    if ("error" in response) return;
    // setIsOpen(!isOpen);
  };
  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(submit)}>
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <FormInput name="serialNumber" title="Serial Number" type="text" />
            <FormInput name="simNumber" title="SIM Number" type="numeric" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <FormInput name="emailAddress" title="Email" type="email" />

            <FormSelect name="network" title="Network" type="numeric">
              <option value={1}>O2</option>
              <option value={2}>Vodafone</option>
              <option value={3}>EE</option>
            </FormSelect>
          </div>
          <Button disabled={!isValid || loading} loading={loading}>
            Confirm
          </Button>
        </>
      </Form>
    </FormProvider>
  );
}
