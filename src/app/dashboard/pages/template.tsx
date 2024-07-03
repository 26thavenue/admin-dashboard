import { ReactNode } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type DBHTemplate = {
  children: ReactNode;
  name: string;
  supportText: string;
  content?: ReactNode;
  backUrl?: string
};

function DBHomeTemplate({ children, name, supportText, content, backUrl }: DBHTemplate) {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <div>
              {backUrl && (
                <p onClick={() => navigate(backUrl)} className="mb-8 text-sm inline-flex items-center gap-2 cursor-pointer hover:text-blue">
                  <MdOutlineKeyboardBackspace />
                  Back
                </p>
              )}
              <h2 className="text-[18px] font-medium">{name}</h2>
            </div>
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
