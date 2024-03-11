import { FormInput } from "../../../../../app/sharedcomponents/form";


export default function BillingAddress({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 flex-col justify-end items-stretch px-7 py-10 mt-8 text-xl leading-7 bg-pink-50 rounded-xl text-zinc-600 max-md:px-5 max-md:max-w-full">
      <FormInput
        name="email"
        title="Country"
        placeholder="e.g Johndoe@example.com"
        type="text"
        autoFocus={true}
      />

      <FormInput
        name="shippingAddress"
        title="Shipping Address"
        placeholder="Enter Post Code"
        type="text"
      />

      <FormInput
        name="houseAddress"
        title="House Address"
        placeholder="Enter House Addres"
        type="text"
      />

      {children}
    </div>
  );
}
