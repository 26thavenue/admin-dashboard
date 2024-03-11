import { ReactNode } from "react";

type DBHTemplate = {
  children: ReactNode;
  name: string;
  supportText: string;
  content?: ReactNode
};

function DBHomeTemplate({ children, name, supportText, content }: DBHTemplate) {

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h2 className="text-[18px] font-medium">{name}</h2>
            <p className="text-[14px]">{supportText}</p>
          </div>
          {content}
        </div>
        {children}
      </div>
    </>
  );
}

export default DBHomeTemplate;
