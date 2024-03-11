import { Outlet } from "react-router-dom";

function DBTemplate() {

  return (
    <main className="sm:h-[100%] bg-[#F8F7F7] p-4 overflow-y-scroll pb-20">
      <Outlet />
    </main>
  );
}

export default DBTemplate;
