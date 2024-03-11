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

function PicturedLeads({
  supportText,
  heading,
  leadText,
  height,
  headingWidth,
  supportTextWidth,
  image,
}: TPlansLeads) {
  const Buttons = () => {
    return (
      <div className="mt-6 mx-auto my-0 flex flex-col md:flex-row justify-center gap-3 min-w-[100%] md:min-w-[20rem]">
        <button className="text-white bg-blue font-normal w-[100%] rounded-[4.741px] py-2 px-3">
          Order Free Sim
        </button>
        <button className="bg-white text-blue font-normal w-[100%] rounded-[4.741px] py-2 px-3">
          View Plans
        </button>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: height || "340px",
      }}
      className={`bg-cover bg-center"
      }] text-white px-8 pb-10`}
    >
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
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default PicturedLeads;
