import { DBImages } from "../DBHome/DBImageImports";
import DBHomeTemplate from "../template";
import { TopUpPaymentOptions } from "./TopUpOptions";

export function PhoneNumberCard() {
  return (
    <div className="bg-white py-6 px-4 rounded-[6px] flex items-center justify-between">
      <div>
        <p>Your Phone Number</p>
        <h3 className="text-[18px] font-medium">4447965248921</h3>
      </div>
      <img src={DBImages.Card} alt="img" />
    </div>
  );
}

function TopUp() {
  return (
    <DBHomeTemplate
      name="Top Up your SIM card"
      supportText="Welcome Bank to Talk4 Mobile"
    >
      <h3 className="text-[18px] font-medium">
        How much would you like to top-up?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <PhoneNumberCard />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <input
            type="button"
            className="bg-white rounded-[8px] px-1 py-2"
            value="EA"
          />
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-white rounded-[8px] px-1 py-2">A</button>
          <button className="bg-blue text-white rounded-[8px] px-1 py-2">
            Top Up
          </button>
          
        </div>
      </div>

      <h3 className="text-[18px] font-medium">
        How would you like to be charged?
      </h3>
      <TopUpPaymentOptions />
      {/* <TopUpModalFlips /> */}
    </DBHomeTemplate>
  );
}

export default TopUp;

// function TopUpModalFlips() {
//   const [modalFlip, setModalFlip] = useState(true);
//   return (
//     <TopUpModal
//       header={modalFlip ? "Card Details" : "Your Billing Address"}
//       description={
//         modalFlip
//           ? "Fill the fields below to Top-Up"
//           : "Fill the fields below to Top-Up"
//       }
//     >
//       <Form>
//         {!modalFlip && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <FormInput
//               name="card_number"
//               title="Select Country"
//               placeholder="Select Country"
//               type="numeric"
//             />
//             <FormInput
//               name="card_name"
//               title="Adddress Line 1"
//               placeholder="Enter Adddress Line 1"
//               type="text"
//             />
//             <FormInput
//               name="cvv"
//               title="Address Line 2"
//               placeholder="Enter Address Line 2"
//               type="numeric"
//             />
//             <FormInput
//               name="cvv"
//               title="Address Line 3"
//               placeholder="Enter Address Line 3"
//               type="numeric"
//             />
//             <FormInput
//               name="cvv"
//               title="Address Line 4"
//               placeholder="Enter Address Line 4"
//               type="numeric"
//             />
//             <FormInput
//               name="expiry_date"
//               title="County/Province"
//               placeholder="County Province"
//               type="text"
//             />
//             <FormInput
//               name="card_name"
//               title="Post Card"
//               placeholder="Enter Post Card"
//               type="text"
//             />
//             <div></div>
//             <Button
//               onClick={() => setModalFlip(!modalFlip)}
//               variant="secondary"
//               type="button"
//             >
//               Back
//             </Button>
//             <Button>Continue</Button>
//           </div>
//         )}
//         {modalFlip && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <FormInput
//               name="card_number"
//               title="Card Number"
//               placeholder="Enter Card Number"
//               type="numeric"
//             />
//             <FormInput
//               name="card_name"
//               title="Card Name"
//               placeholder="Enter Card Name"
//               type="text"
//             />
//             <FormInput
//               name="cvv"
//               title="CVV"
//               placeholder="Enter CVV"
//               type="numeric"
//             />
//             <FormInput
//               name="expiry_date"
//               title="Enter Expiry Date"
//               placeholder="MM/YY"
//               type="text"
//             />
//             <div></div>
//             <Button onClick={() => setModalFlip(!modalFlip)}>Continue</Button>
//           </div>
//         )}
//       </Form>
//     </TopUpModal>
//   );
// }
