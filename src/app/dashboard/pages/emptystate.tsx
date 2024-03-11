import { ReactNode } from "react";
import { DBImages } from "./DBHome/DBImageImports";

type IEmptyState = {
  cta: ReactNode;
  heading: string;
  supportText: string
};

function Emptystate({ cta, heading, supportText }: IEmptyState) {
  return (
    <div className="h-[calc(100vh-200px)] grid place-items-center">
      <div className="text-center flex flex-col gap-1">
        <img className="block mx-auto" src={DBImages.FiveGSimCard} />
        <h3 className="text-[18px] font-medium">{heading}</h3>
        <p className="max-w-md">{supportText}</p>
        {cta}
      </div>
    </div>
  );
}

export default Emptystate;
