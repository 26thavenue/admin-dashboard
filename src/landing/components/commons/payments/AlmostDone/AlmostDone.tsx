// import React from "react";
// import { FormInput } from "../../../../../app/sharedcomponents/form";
// import { RadioGroup } from "@headlessui/react";
// import { Controller, useFormContext } from "react-hook-form";
// import { CheckBoxMark, CheckIcon } from "@/app/sharedcomponents/checkIcon";

// const types = [
//   {
//     name: "Credit Card",
//     ram: "Pay with your credit card and enter your details",
//   },
//   {
//     name: "Paypal",
//     ram: "Pay with paypal and enter your details",
//   },
// ];

export default function AlmostDone() {
  // const { watch } = useFormContext();
  return (
    <div>Almost</div>
    // <div className="flex flex-col gap-2 px-5 py-8 bg-pink-50 rounded-xl max-w-[627px] max-md:px-5">
    //   <div className="text-2xl font-bold text-black max-md:max-w-full">
    //     Almost done,
    //   </div>
    //   <div className="mt-0 text-base font-light text-black max-md:max-w-full">
    //     Simply input your payment details below to complete your order.
    //   </div>
    //   <div className="mt-9 max-md:max-w-full">
    //     <Controller
    //       rules={{
    //         required: true,
    //       }}
    //       name={"paymentOptions"}
    //       render={({ field }) => {
    //         return <SIMTypeOptions {...field} />;
    //       }}
    //     />
    //   </div>

    //   {watch("paymentOptions") === "Credit Card" && (
    //     <>
    //       {" "}
    //       <div className="self-start mt-6 text-base font-medium text-black">
    //         <h4>Card Details</h4>
    //         <p className="self-start mt-1 text-sm font-light text-black whitespace-nowrap">
    //           Fill the fields below to Top-Up
    //         </p>
    //       </div>
    //       <CardDetails />
    //       <Controller
    //         rules={{
    //           required: true,
    //         }}
    //         defaultValue={false}
    //         name={"saveCardDetails"}
    //         render={({ field }) => {
    //           return <CheckBoxMark title={"Save card details"} {...field} />;
    //         }}
    //       />
    //       <Controller
    //         rules={{
    //           required: true,
    //         }}
    //         defaultValue={false}
    //         name={"defaultPaymentMethod"}
    //         render={({ field }) => {
    //           return (
    //             <CheckBoxMark
    //               title={"Make this my default payment method"}
    //               {...field}
    //             />
    //           );
    //         }}
    //       />
    //     </>
    //   )}
    // </div>
  );
}

// function CardDetails({ children }: { children?: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-0 mt-1 text-xl leading-7 bg-pink-50 rounded-xl text-zinc-600 px-0 max-w-full">
//       <FormInput
//         name="card_number"
//         title="Card Number"
//         placeholder="Enter Card Number"
//         type="numeric"
//       />
//       <FormInput
//         name="card_name"
//         title="Card Name"
//         placeholder="Enter Card Name"
//         type="text"
//       />
//       <FormInput
//         name="cvv"
//         title="CVV"
//         placeholder="Enter CVV"
//         type="numeric"
//       />
//       <FormInput
//         name="expiry_date"
//         title="Enter Expiry Date"
//         placeholder="MM/YY"
//         type="text"
//       />

//       {children}
//     </div>
//   );
// }

// export const SIMTypeOptions = React.forwardRef(
//   (props: {
//     onChange: (data: string) => void;
//     ref: React.Ref<HTMLInputElement>;
//   }) => {
//     const { onChange, ref } = props;
//     const [selected, setSelected] = useState({
//       name: "Credit Card",
//       ram: "Pay with your credit card and enter your details",
//     });

//     return (
//       <div ref={ref} className="w-full px-0 py-0">
//         <div className="mx-auto w-full ">
//           <RadioGroup
//             value={selected}
//             onChange={(value) => {
//               setSelected(value);
//               onChange(value.name);
//             }}
//           >
//             <RadioGroup.Label className="sr-only">
//               Payment Types
//             </RadioGroup.Label>
//             <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
//               {types.map((plan) => (
//                 <RadioGroup.Option
//                   key={Math.random()}
//                   value={plan}
//                   className={({ checked }) =>
//                     `
//                   ${checked ? " text-black bg-white" : "bg-white"}
//                     relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md p-2 focus:outline-none h-[80px]`
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
//                             </RadioGroup.Description>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </RadioGroup.Option>
//               ))}
//             </div>
//           </RadioGroup>
//         </div>
//       </div>
//     );
//   }
// );
