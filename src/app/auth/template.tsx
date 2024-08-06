import { Images } from "../../assets/images";

type TAuthTemplate = {
  children?: React.ReactNode;
  title?: string;
  altText?: string;
};

function AuthTemplate({ children, title, altText }: TAuthTemplate) {
  const { SpringA, SpringB, SpringC } = Images;

  return (
    <div className="max-w-full h-screen">
      <div className="w-[100%] sm:w-[100%] mx-auto my-0 lg:w-1/2 bg-white p-8 sm:pb-6 sm:pt-4 sm:px-16 md:pb-6 md:pt-4 md:px-16  lg:pb-12 lg:pt-8 lg:px-24 ">
        {/* <img className="ml-auto" src={SpringB} alt="Spring B" /> */}
        <div className="">
          {/* <img
            className="mx-auto"
            src={""}
            alt={"Logo"}
          /> */}
          {title && (
            <h3 className="mt-4 text-center text-[1.95rem] text-black font-bold relative">
              {title}
            </h3>
          )}
          {altText && (
            <p className="text-center text-black font-light">{altText}</p>
          )}
          {children}
        </div>
        <img className="" src={SpringC} alt="Spring C" />
        <img className="ml-auto mb-[-3rem]" src={SpringA} alt="Spring A" />
      </div>
    </div>
  );
}

export default AuthTemplate;
