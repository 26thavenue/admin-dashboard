// import React from "react";
// import { RadioGroup } from "@headlessui/react";
// import { Controller, FormProvider, useForm } from "react-hook-form";
// import { FormInput, Button, Form } from "@/app/sharedcomponents/form";
// import GlobalModal from "@/app/sharedcomponents/modals/GlobalModal";
// import { Regex } from "@/utils/regex";
// import { Images } from "@/assets/images";
// import { useNavigate } from "react-router-dom";
// import { URLs } from "@/utils/enums";
// import { CheckIcon } from "@/app/sharedcomponents/checkIcon";

// interface ITopUp {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const types = [
//   {
//     name: "£2.50",
//     ram: "Buy Plan + Free SIM as a new user",
//   },
//   {
//     name: "£2.55",
//     ram: "Buy Plan as a existing user",
//   },
// ];

// const plans = [
//   {
//     name: "e-SIM",
//     ram: "Pick an e-SIM",
//   },
//   {
//     name: "Physical Sim",
//     ram: "Pick an physical Sim",
//   },
// ];

// export const SIMTypeOptions = React.forwardRef(
//   (props: {
//     onChange: (data: string) => void;
//     ref: React.Ref<HTMLInputElement>;
//   }) => {
//     const { onChange, ref } = props;
//     const [selected, setSelected] = useState({
//       name: "",
//       ram: "",
//     });

//     return (
//       <div ref={ref} className="w-full px-0 py-0">
//         <div className="mx-auto w-full ">
//           <RadioGroup
//             value={selected}
//             onChange={(value) => {
//               setSelected(value);
//               onChange(value.name);
//               console.log({ selected });
//             }}
//           >
//             <RadioGroup.Label className="sr-only">
//               Payment Types
//             </RadioGroup.Label>
//             <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
//               {plans.map((plan) => (
//                 <RadioGroup.Option
//                   key={Math.random()}
//                   value={plan}
//                   className={({ checked }) =>
//                     `
//                   ${checked ? " text-black bg-white" : "bg-white"}
//                     relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none h-[80px]`
//                   }
//                 >
//                   {({ checked }) => (
//                     <>
//                       <div className="flex items-center justify-between w-full">
//                         <div className="flex items-center justify-between gap-2 ">
//                           {/* {checked && ( */}
//                           <div className="shrink-0 text-black">
//                             <CheckIcon className="h-6 w-6" checked={checked} />
//                           </div>

//                           <div className="text-sm">
//                             <RadioGroup.Label
//                               as="p"
//                               className={`font-semibold text-lg ${
//                                 checked ? "text-black" : "text-gray-900"
//                               }`}
//                             >
//                               {plan.name}
//                             </RadioGroup.Label>
//                             <RadioGroup.Description
//                               as="span"
//                               className={`inline text-sm ${
//                                 checked ? "text-black" : "text-gray-500"
//                               }`}
//                             >
//                               <span>{plan.ram}</span>
//                               {/* <span aria-hidden="true">&middot;</span>{" "}
//                             <span>{plan.disk}</span> */}
//                             </RadioGroup.Description>
//                           </div>
//                         </div>
//                         <div className="shrink-0 text-black">
//                           <img src={Images.SimCard_Plan} />
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </RadioGroup.Option>
//               ))}
//             </div>
//           </RadioGroup>
//           {/* {topUpModal && (
//           <PlansTopModal setIsOpen={setTopUpModal} isOpen={topUpModal} />
//         )} */}
//         </div>
//       </div>
//     );
//   }
// );

// export const SIMOrderOptions = React.forwardRef(
//   (props: {
//     onChange: (data: string) => void;
//     ref: React.Ref<HTMLInputElement>;
//   }) => {
//     const { onChange, ref } = props;
//     console.log(props);
//     const [selected, setSelected] = useState({
//       name: "",
//       ram: "",
//     });

//     return (
//       <div ref={ref} className="w-full px-0 py-0">
//         <div className="mx-auto w-full ">
//           <RadioGroup
//             value={selected}
//             onChange={(value) => {
//               setSelected(value);
//               onChange(value.name);
//               console.log({ selected });
//             }}
//           >
//             <RadioGroup.Label className="sr-only">
//               Payment Types
//             </RadioGroup.Label>
//             <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
//               {types.map((plan) => (
//                 <RadioGroup.Option
//                   key={Math.random()}
//                   value={plan}
//                   className={({ checked }) =>
//                     `
//                   ${
//                     checked
//                       ? " border border-brand text-black bg-[#FFEEF6]"
//                       : "bg-[#FFEEF6]"
//                   }
//                     relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none h-[80px]`
//                   }
//                 >
//                   {({ checked }) => (
//                     <>
//                       <div className="flex w-full items-center justify-between">
//                         <div className="flex items-center gap-2 w-full">
//                           {/* {checked && ( */}
//                           <div className="shrink-0 text-black">
//                             <img src={Images.SimCard_Plan} />
//                           </div>

//                           <div className="text-sm">
//                             <RadioGroup.Description
//                               as="span"
//                               className={`inline text-sm ${
//                                 checked ? "text-black" : "text-gray-500"
//                               }`}
//                             >
//                               <span>{plan.ram}</span>
//                               {/* <span aria-hidden="true">&middot;</span>{" "}
//                             <span>{plan.disk}</span> */}
//                             </RadioGroup.Description>
//                             <RadioGroup.Label
//                               as="p"
//                               className={`font-semibold text-lg ${
//                                 checked ? "text-black" : "text-gray-900"
//                               }`}
//                             >
//                               {plan.name}
//                             </RadioGroup.Label>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </RadioGroup.Option>
//               ))}
//             </div>
//           </RadioGroup>
//           {/* {topUpModal && (
//           <PlansTopModal setIsOpen={setTopUpModal} isOpen={topUpModal} />
//         )} */}
//         </div>
//       </div>
//     );
//   }
// );

export function PlansTopModal() {
  // const formMethods = useForm({
  //   mode: "all",
  // });
  // const {
  //   // control,
  //   watch,
  //   handleSubmit,
  //   formState: { isValid },
  // } = formMethods;

  // const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const submit = (data: any) => {
  //   console.log(data);

  //   navigate(`./${URLs.Order_Sim}/${URLs.Order_Preview}/preview/payment`);
  // }
  return (
    <div>App</div>
    // <GlobalModal
    //   bodyClassName="max-w-3xl"
    //   isOpen={isOpen}
    //   setIsOpen={setIsOpen}
    //   header={"Order SIM"}
    //   description={"Select the option that best fit your order "}
    // >
    //   <FormProvider {...formMethods}>
    //     <Form
    //       className="pt-2 gap-8"
    //       onSubmit={handleSubmit(submit)}
    //     >
    //       <div>
    //         <div className="grid grid-cols-1 gap-3 mt-0">
    //           <Controller
    //             rules={{
    //               required: true,
    //             }}
    //             name={"SimCardOptions"}
    //             // control={control}
    //             render={({ field }) => {
    //               return <SIMOrderOptions {...field} />;
    //             }}
    //           />
    //         </div>
    //       </div>
    //       {watch("SimCardOptions") && (
    //         <div>
    //           <h3 className="text-md font-medium leading-3 text-black">
    //             Type of SIM
    //           </h3>
    //           <small className="text-[12px]">
    //             Select the option that best fit your order
    //           </small>
    //           <div className="grid grid-cols-1 gap-3 mt-0">
    //             <Controller
    //               rules={{
    //                 required: true,
    //               }}
    //               name={"SimTypeOptions"}
    //               // control={control}
    //               render={({ field }) => {
    //                 return <SIMTypeOptions {...field} />;
    //               }}
    //             />
    //           </div>
    //         </div>
    //       )}

    //       {watch("SimTypeOptions") && (
    //         <div>
    //           <h3 className="text-md font-medium leading-3 text-black">
    //             Want to Port In
    //           </h3>
    //           <small className="text-[12px]">
    //             Complete the fields below to port in
    //           </small>
    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-0">
    //             <FormInput
    //               name="card_number"
    //               title="Your Number (MSISDN)"
    //               placeholder="e.g 4489393049"
    //               type="numeric"
    //               moreRegister={{
    //                 pattern: {
    //                   value: Regex.phone.pattern,
    //                   message: Regex.phone.message,
    //                 },
    //               }}
    //             />
    //             <FormInput
    //               name="card_names"
    //               title="PAC Code"
    //               placeholder="Enter PAC Code"
    //               type="text"
    //             />
    //             <FormInput
    //               name="card_name"
    //               title="Port-out Start Date"
    //               placeholder="Enter Port-out Start Date"
    //               type="date"
    //             />
    //           </div>
    //         </div>
    //       )}

    //       <Button className="mt-0" disabled={!isValid}>
    //         Continue
    //       </Button>
    //     </Form>
    //   </FormProvider>
    // </GlobalModal>
  );
}
