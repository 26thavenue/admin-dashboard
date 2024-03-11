function LandingTopUp() {
  return (
    <>
      <div className="bg-[#FFEEF6] h-full lg:h-full w-full relative px-5 py-20 lg:px-20 lg:py-20 flex flex-row mb-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full w-full max-w-5xl gap-6 text-black mx-auto my-0 ">
          <PlansCards />
          <div className="flex flex-col items-left justify-center gap-2 text-black ">
            <h3 className="text-3xl lg:text-3xl font-bold text-left mt-0 m-0 max-w-[300px]">
              Fast Top Up on Talk4 Mobile
            </h3>
            <p className="font-normal text-left max-w-[575px]">
              Experience unrivalled speed & connect with the world on our 5G
              network.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingTopUp;

export function PlansCards() {
  return (
    <div className="w-[100%] lg:w-[50%]">
      {" "}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        <input
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
          value="EA"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
        <input
          value={"A"}
          type="button"
          className="bg-white rounded-[8px] px-1 py-2"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-3">
        <input
          placeholder={"Enter Phone Number"}
          type="text"
          className="bg-white rounded-[8px] p-2 col-span-5 outline-blue lg:col-span-3"
        />
        <button
          type="button"
          className="bg-blue text-white rounded-[8px] px-1 py-2 col-span-5 lg:col-span-2"
        >
          Top Up
        </button>
      </div>
    </div>
  );
}
