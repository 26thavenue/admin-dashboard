import { Images } from "../../../assets/images";

function FreeData() {
  const { Free_Data } = Images;
  const {
    BlueLady,
    RedLady,
    RedLadyWave,
    BlueLadyWave,
    FreeData,
    FreeData2,
    FreeData3,
    FreeData4,
  } = Free_Data;
  return (
    <div className="bg-[#FFEEF6] h-[1230px] lg:h-[550px] relative">
      <div
        className={
          "relative h-[25%] lg:h-[50%] bg-[#DEE8FF] flex flex-col items-center justify-center w-full gap-2 text-black"
        }
      >
        <img
          className="absolute left-28 top-4 lg:left-72 lg:top-12  lg:block"
          src={FreeData}
          alt="Spring C"
        />
        <img
          className="absolute top-12 -left-3 z-10 lg:left-40 lg:top-32"
          src={FreeData2}
          alt="Spring D"
        />
        <img
          className="absolute right-72 top-12 hidden lg:block"
          src={FreeData3}
          alt="Spring E"
        />
        <img
          className="absolute right-6 bottom-4 hidden lg:block lg:right-10 lg:bottom-5"
          src={FreeData4}
          alt="Spring B"
        />
        <h3 className="text-3xl lg:text-3xl font-bold text-center mt-4">
          Enjoy Your Free Data
        </h3>
        <p className="font-normal text-center w-auto lg:w-[750px] p-4">
          With your original number ported to Now Mobile, now you can enjoy your
          1GB data for free! Time to check out some amazing PAYG bundles or our
          monthly plans to find what best suits your needs.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row bg-yellow-500 h-[75%] lg:h-[50%] relative">
        <div className="bg-blue w-[100%] lg:w-[50%] relative h-[100%]">
          <div className="flex flex-col-reverse lg:flex-row items-center z-50 absolute bottom-0 px-8 gap-5">
            <img
              className="right-0 bottom-0 lg:right-0 lg:bottom-0"
              src={RedLady}
              alt="Spring B"
            />
            <div className="text-white flex flex-col gap-2 text-center lg:text-left">
              <h4 className="text-2xl font-bold">
                Ready to Transfer your Number?
              </h4>
              <p className="text-md">Order your FREE SIM from Talk4 Mobile</p>
              <button className="text-white bg-brand w-[fit-content] rounded-[8px] py-2 px-8 mt-3 mx-auto lg:mx-0 my-0 block">
                Order SIM
              </button>
            </div>
          </div>
          <img
            className="absolute right-0 bottom-0 lg:right-0 lg:bottom-0"
            src={RedLadyWave}
            alt="Spring B"
          />
        </div>
        <div className="bg-brand w-[100%] lg:w-[50%] h-[100%] relative">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center z-50 absolute bottom-0 px-8 gap-5">
            <img
              className="right-0 bottom-0 lg:right-0 lg:bottom-0"
              src={BlueLady}
              alt="Spring B"
            />
            <div className="text-white flex flex-col gap-2 text-center lg:text-left">
              <h4 className="text-2xl font-bold">
                Replace SIM Lost/Stolen SIM?
              </h4>
              <p className="text-md">Order a Replacement SIM Today</p>
              <button className="text-white bg-blue w-[fit-content] rounded-[8px] py-2 px-8 mt-3 mx-auto lg:mx-0 my-0 block">
                Order SIM
              </button>
            </div>
          </div>
          <img
            className="absolute -z-1 right-0 bottom-0 lg:right-0 lg:bottom-0"
            src={BlueLadyWave}
            alt="Spring B"
          />
        </div>
      </div>
    </div>
  );
}

export default FreeData;
