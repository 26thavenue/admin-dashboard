import { Images } from "../../../assets/images";


export default function NetworkDifferently() {
  return (
    <div className="justify-center items-center bg-[#FFEEF6] flex flex-col px-16 py-12 max-md:px-5 relative">
      <div className="flex w-full max-w-5xl gap-3 my-12 items-start max-md:max-w-full max-md:flex-wrap max-md:my-10">
        <img
          loading="lazy"
          src={Images.BlueDots}
          className="aspect-[0.24] object-contain object-center w-[35px] overflow-hidden shrink-0 max-w-full hidden lg:block"
        />
        <img
          loading="lazy"
          src={Images.ImageGroup}
          className="absolute  right-6 lg:left-0 hidden lg:bottom-0 lg:block"
        />
        <div className="justify-center self-stretch px-2.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet={Images.Content}
                src={Images.Content}
                alt={"Image Group"}
                className="aspect-[1.18] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-zinc-800 text-3xl font-bold max-md:max-w-full">
                  The Network That Does Mobile Differently.
                </div>
                <article>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Mobile freedom like never before with high-quality and
                    low-cost calling and data connectivity. Only pay for what
                    you need, when you need it.
                  </p>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Enjoy affordable superfast 5G data plans that allow you to
                    browse the internet, stream your favourite movies, and much
                    more without any slow-downs or data limitations.
                  </p>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Shop for unlimited UK and international calling plans to
                    stay connected for less! Plus, get high quality data
                    connectivity and strong signal coverage throughout the UK –
                    proudly powered by EE’s network.
                  </p>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Pay monthly with our cheap SIM-only plans or go PAYG and
                    stick to a budget with incredible extras.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
