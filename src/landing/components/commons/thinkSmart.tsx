import { Images } from "../../../assets/images";

export default function ThinkSmart() {
  const { thinkSmart } = Images;

  const { ThinkSmartLady, ThinkSmartEllipse } = thinkSmart;
  return (
    <div className="bg-brand flex flex-col items-center pt-6 px-16 max-md:px-5">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl justify-between gap-5 mt-0 items-start md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col mt-6 md:max-w-full md:mt-20">
          <div className="justify-center text-white text-3xl font-bold max-md:max-w-full">
            Think Smart. <br />
            Choose Talk4 Mobile
          </div>
          <article>
            <p className="text-white text-[16px] leading-7 mt-6 max-md:max-w-full">
              So, if you’re looking for something a little different, that gives
              you more flexibility and a service that you can trust, then look
              no further than Now Mobile.
            </p>
            <p className="text-white text-[16px] leading-7 mt-3.5 max-md:max-w-full">
              So, in case you’re still wondering why our customers love Now
              Mobile so much. Well, it’s that we’re more than just a calling
              service. We offer everything you could possibly ever need to
              happily stay connected with family & friends at home and abroad!
            </p>
          </article>
        </div>
        <img
          loading="lazy"
          srcSet={ThinkSmartLady}
          src={ThinkSmartLady}
          className="aspect-square object-contain object-center w-full overflow-hidden self-stretch grow basis-[0%] max-md:max-w-full"
        />
        <img
          loading="lazy"
          src={ThinkSmartEllipse}
          className="aspect-[1.08] object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full mt-[474px] self-end max-md:mt-10"
        />
      </div>
    </div>
  );
}
