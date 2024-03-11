import { Images } from "../../../assets/images";

type SmartCardsProps = {
  image: string;
  superText: string;
  text: string;
};

function SmartCards({ image, superText, text }: SmartCardsProps) {
  return (
    <div className="inline-flex gap-4 my-3">
      <img src={image} alt={superText} className="" />
      <div>
        <h2 className="text-[21px] font-medium">{superText}</h2>
        <p className="max-w-md text-[15px] font-normal">{text}</p>
      </div>
    </div>
  );
}

function SmartNetwork() {
  const { SmartNetworkAd } = Images;
  const { SmartAd, Antenna, LockedMoney, SimCard2 } = SmartNetworkAd;

  return (
    <div className="bg-brand h-full lg:h-[500px] w-full relative px-4 lg:px-6 py-6">
      <div className="flex flex-row flex-wrap lg:flex-nowrap h-full max-w-6xl mx-auto my-0 gap-20 text-black p-2 ">
        <img src={SmartAd} alt="Smart Ad" className="lg:max-w-sm lg:ml-5" />
        <div className="text-white">
          <h3 className="text-3xl lg:text-3xl font-bold text-center lg:text-left my-4 max-w-lg">
            The Smart Network Trusted by Smarter People
          </h3>

          <div>
            <SmartCards
              image={SimCard2}
              superText="Truly Unlimited Data"
              text="Get superfast data connectivity without usage caps or throttling."
            />
            <SmartCards
              image={LockedMoney}
              superText="No Price Shocks"
              text="Cash in the locked in term prices, no hidden fees and plans offering free EU Roaming."
            />
            <SmartCards
              image={Antenna}
              superText="Widest Network Coverage"
              text="We're proudly powered by EE. Enjoy strong connectivity, no matter where you are in the UK."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartNetwork;
