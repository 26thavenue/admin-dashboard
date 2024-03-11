import { Images } from "@/assets/images";
import { twMerge } from "tailwind-merge";

interface TPlansLeads {
  image?: string;
  leadText?: string;
  supportText: string;
  heading: string;
  isBolt?: boolean;
  height?: string;
  headingWidth?: string;
  supportTextWidth?: string;
}

function OthersLeads({
  supportText,
  heading,
  leadText,
  height,
  headingWidth,
  supportTextWidth,
}: TPlansLeads) {
  const { Leads } = Images;
  const { Main, Plans } = Leads;

  const { MainDotsGroupB, DotsHorizontal } = Main;
  const { Item5 } = Plans;

  return (
    <div className={`${twMerge(`bg-brand h-full text-white px-8 pb-10`, height)}`}>
      <div className="relative max-w-6xl w-full flex items-start justify-[unset] md:justify-center mx-auto mt-0 md:mb-0 mb-44 h-[inherit] flex-col md:flex-row">
        <div className="relative pt-0 mt-12 w-[100%] max-w-[38.7rem] leading-6 mx-auto flex flex-col gap-2 text-center">
          {leadText && <p className="uppercase text-center">{leadText}</p>}
          <h2
            className={`text-4xl w-full max-w-[${
              headingWidth || "450px"
            }] mx-auto my-0 md:text-4xl font-bold text-center px-1 z-20`}
          >
            {heading}
          </h2>
          <p
            className={`text-center w-full max-w-[${
              supportTextWidth || "550px"
            }] mx-auto my-0`}
          >
            {supportText}
          </p>
        </div>
        <img
          className="absolute bottom-90 md:bottom-20 -left-4 md:left-4"
          src={MainDotsGroupB}
        />
        <img src={Item5} className="absolute  hidden md:block left-40 top-8" />
        <img
          src={DotsHorizontal}
          className="absolute right-10 md:right-40 -bottom-20 md:bottom-60"
        />
      </div>
    </div>
  );
}

export default OthersLeads;
