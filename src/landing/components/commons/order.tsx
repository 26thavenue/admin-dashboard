import { Images } from "../../../assets/images";

function OrderBanner() {
  const { SpringB, SpringC, SpringD, SpringE } = Images;
  return (
    <div className="bg-blue h-[320px] p-8 lg:h-[300px] relative">
      <img
        className="absolute right-28 top-48 hidden lg:block"
        src={SpringC}
        alt="Spring C"
      />
      <img
        className="absolute top-4 left-10 lg:left-20 lg:top-[unset]"
        src={SpringD}
        alt="Spring D"
      />
      <img
        className="absolute right-20 hidden lg:block"
        src={SpringE}
        alt="Spring E"
      />
      <img
        className="absolute right-6 top-4 lg:left-52 lg:top-36"
        src={SpringB}
        alt="Spring B"
      />
      <div className="flex flex-col items-center justify-center h-full w-full gap-6 text-white ">
        <h3 className="text-3xl lg:text-3xl font-bold text-center">
          Order your free PAYG SIM today.
        </h3>
        <p className="font-normal text-center">
          Join the UK’s fastest growing network, order your free PAYG SIM today.
        </p>
        <div className="inline-flex gap-2">
          <button
            //   onClick={buy}
            className=" text-blue bg-white w-[154px] lg:w-[184px] rounded-[4.741px] py-2 text-[16px] font-normal"
          >
            Order Free Sim
          </button>
          <button
            //   onClick={details}
            className="border border-white text-white w-[123px] lg:w-[153px] rounded-[4.741px] py-2 text-[16px] font-normal"
          >
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderBanner;
