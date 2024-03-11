import { Images } from "../../../assets/images";

function PhoneAbroad() {
  const { ExcitedLady, Travel } = Images;
  return (
    <div className="flex flex-col items-center px-16 pt-12 bg-[#FFEEF6] max-md:px-5">
      <div className="flex flex-col items-center mt-8 w-full text-xl max-w-[1169px] max-md:mt-10 max-md:max-w-full">
        <div className="text-center text-lg leading-[147%] max-md:max-w-full">
          Roam Like Home with Talk4 Mobile
        </div>
        <div className="justify-center mt-2 text-3xl font-bold text-center  max-md:max-w-full">
          Using your phone abroad
        </div>
        <div className="mt-2 leading-7 text-lg text-center w-[820px] max-md:max-w-full">
          Our plans can be used in the EU and selected destinations just like
          you use them at home and at no extra cost.
        </div>
        <div className="z-10 self-stretch -mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
            <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-stretch self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="justify-center text-3xl font-bold  max-md:max-w-full">
                  Happy Travels
                </div>
                <div className="mt-3.5 text-lg leading-7  max-md:max-w-full">
                  Travelling within Europe? Get free roaming and access to your
                  data, minutes and SMS on your favourite Now Mobile plans at no
                  extra cost. Over{" "}
                  <span className="underline">45 countries supported</span>
                  <br />
                  For travels outside the EU, you will need to{" "}
                  <span className="underline">
                    add credit to your account
                  </span>{" "}
                  to stay connected.
                </div>
                <div className="justify-center items-stretch p-5 mt-7 text-xl leading-7 bg-white rounded-xl text-zinc-600 max-md:max-w-full">
                  <span className="font-bold">🔥 Exclusive</span>
                  <br />
                  <span className="text-sm leading-5">
                    Our roaming plans have no data caps or throttling so you can
                    continue to{" "}
                  </span>
                  <br />
                  <span className="text-sm leading-5 mt-4">
                    enjoy your allowances without restrictions
                  </span>
                  .
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center items-stretch pr-12 pl-4 min-h-[493px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={Travel}
                  className="object-cover object-center absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  srcSet={ExcitedLady}
                  className="object-contain object-center z-10 mt-0 w-full aspect-[1.04] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneAbroad;
