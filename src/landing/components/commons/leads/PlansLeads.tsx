import { Images } from "@/assets/images";

interface TPlansLeads {
  image: string;
  leadText: string;
  supportText: string;
  heading: string;
  isBolt?: boolean;
}

function PlansLeads({
  image,
  leadText,
  supportText,
  heading,
  isBolt = false,
}: TPlansLeads) {
  const { Leads } = Images;

  const { Plans } = Leads;

  const { Ellipse1, Ellipse2, Ellipse3, Item1, Item2, Item3, Item4, Item5 } =
    Plans;

  const Buttons = () => {
    return (
      <div className="mt-6 flex flex-row gap-3 max-w-[20rem]">
        <button
          // onClick={buy}
          className="text-white bg-blue font-normal w-[70%] rounded-[4.741px] py-2 px-3"
        >
          Order Free Sim
        </button>
        <button
          // onClick={details}
          className="bg-white text-blue font-normal w-[70%] rounded-[4.741px] py-2 px-3"
        >
          View Plans
        </button>
      </div>
    );
  };

  const BoltButtons = () => {
    return (
      <div className="mt-6 flex flex-row gap-3 max-w-[20rem]">
        <button
          // onClick={buy}
          className="text-white bg-blue font-normal w-[70%] rounded-[4.741px] py-2 px-3"
        >
          PAYG data bolt-on
        </button>
      </div>
    );
  };

  return (
    <div className="bg-brand calc_height md:h-[460px] text-white px-8">
      <div className="max-w-6xl mx-auto my-0 flex h-[inherit] flex-col md:flex-row justify-between">
        <div className="relative max-w-[480px] leading-6 mt-28 flex flex-col gap-2">
          <p className="uppercase text-center md:text-left">{leadText}</p>
          <h2 className="text-3xl  font-bold text-center md:text-left">
            {heading}
          </h2>
          <p className="text-center md:text-left">{supportText}</p>
          {isBolt ? <BoltButtons /> : <Buttons />}

          <img src={Item1} className="absolute bottom-8 z-40" />

          <img src={Item5} className="absolute -right-8 -top-8" />
        </div>
        <div className="flex flex-col items-stretch h-[unset] ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-row grow justify-center items-stretch pr-12 pl-4 h-[unset] md:h-[493px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <img src={Item3} className="absolute left-0 top-40" />
            <img src={Item4} className="absolute right-0 top-40" />
            <img src={Item2} className="absolute right-20 top-20" />
            <img
              loading="lazy"
              src={Ellipse1}
              className="object-cover object-bottom bottom-0 absolute inset-x-1 size-full"
            />
            <img
              loading="lazy"
              src={Ellipse2}
              className="object-cover object-left bottom-10 absolute inset-x-8 size-full"
            />
            <img
              loading="lazy"
              src={Ellipse3}
              className="object-cover object-right bottom-40 left-96 absolute inset-x-4 size-full"
            />
            <img
              loading="lazy"
              src={Ellipse1}
              className="object-cover object-bottom bottom-0 absolute inset-x-1 size-full"
            />
            <img
              loading="lazy"
              srcSet={image}
              className="object-contain object-bottom  inset-x-1 z-0 mt-8 w-full max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansLeads;
