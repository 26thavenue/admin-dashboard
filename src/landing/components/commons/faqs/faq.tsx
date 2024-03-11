import { Images } from "../../../../assets/images";
import FaqQuestions from "./faq_questions";

function Faq() {
  const { FAQs } = Images;
  const { Faq1, Faq2, Faq3, Faq4 } = FAQs;
  return (
    <div className="bg-[#FFEEF6] h-full lg:h-[600px] w-full relative px-6 py-6">
      <img
        className="absolute right-28 bottom-24 hidden lg:block"
        src={Faq1}
        alt="FAQ1"
      />
      <img
        className="absolute top-36 left-10 hidden lg:left-36 lg:top-60 lg:block"
        src={Faq2}
        alt="FAQ2"
      />
      <img
        className="absolute right-0 top-28 hidden lg:block"
        src={Faq3}
        alt="FAQ3"
      />
      <img
        className="absolute  right-6 lg:left-0 hidden lg:bottom-12 lg:block"
        src={Faq4}
        alt="FAQ4"
      />
      <div className="flex flex-col items-center justify-center h-full w-full gap-6 text-black ">
        <h3 className="text-3xl lg:text-3xl font-bold text-center mt-4">
          Frequently asked questions
        </h3>
        <p className="font-normal text-center">
          Explore quick answers to some questions about Talk4 Mobile by our
          customers.
        </p>
        <FaqQuestions />
      </div>
    </div>
  );
}

export default Faq;
