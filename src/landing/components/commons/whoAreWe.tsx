import { Images } from "../../../assets/images";


export default function WhoAreWe() {
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
          src={Images.Splash}
          className="absolute  lg:left-32 hidden lg:bottom-64 lg:block"
        />
        <img
          loading="lazy"
          src={Images.side_ware_who_we_are}
          className="absolute  right-6 lg:left-0 hidden lg:-bottom-60 lg:block"
        />
        <div className="justify-center self-stretch px-2.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet={Images.ContentsWhoWeAre}
                src={Images.ContentsWhoWeAre}
                alt={"Image Group"}
                className="aspect-[1.18] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-zinc-800 text-3xl font-bold max-md:max-w-full">
                  Who are we?
                </div>
                <article>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Talk4 Mobile is connecting you to your loved ones since
                    2010. Enjoy cheap international calls and data plans with
                    our great value SIM-only deals
                  </p>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Each month, Now Mobile helps thousands of users connect with
                    family & friends worldwide. And what’s even more impressive
                    is that we’ve been doing this for almost three decades.
                  </p>
                  <p className="text-zinc-600 text-[16px] leading-7 mt-3.5 max-md:max-w-full">
                    Since inception we’re focused on offering the best in-class
                    connectivity to our clients for local and international
                    mobile and data connectivity. With customers at the heart of
                    everything we do, we’ve developed leading technologies and
                    built up the best relationships with key partners across the
                    world to provide you with the best possible network
                    coverage, call rates and telecommunications services.
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
