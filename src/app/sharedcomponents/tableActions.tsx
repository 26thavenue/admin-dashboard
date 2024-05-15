import { GoDotFill } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function getStatus(isActive: boolean) {
  switch (isActive) {
    case true:
      return { color: "#34C759", text: "Active" };
    case false:
      return { color: "#FF9500", text: "Inactive" };
    default:
      return { color: "black", text: "-" };
  }
}

function TableStatus({ status }: { status: boolean }) {
  const { color, text } = getStatus(status);
  return (
    <div>
      <div
        style={{
          boxShadow: "0px 2px 10px 0px #7C8DB51F",
        }}
        className=" flex flex-row items-center justify-center w-fit px-3 py-1 gap-1 rounded-[8px]"
      >
        <GoDotFill color={color} fontSize={"20px"} />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default TableStatus;

export function TableNavigate({ url }: { url: string }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(url)}
      className="text-blue flex flex-row items-center justify-center w-fit  gap-2 cursor-pointer"
    >
      <IoEyeOutline />
      <span>View More</span>
    </div>
  );
}
