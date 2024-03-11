// import { useSidebar } from "../../utils/contexts/app/useSidebar";
import DBHeader from "./components/header";
import DBSidebar from "./components/sidebar";
import DBTemplate from "./components/template";

function Dashboard() {
  // const { isOpen } = useSidebar();
  return (
    <div className="flex h-screen overflow-visible md:overflow-hidden">
      <DBSidebar />
      <div
        className={`w-[100%] md:w-10/12`}
      >
        <DBHeader />
        <DBTemplate />
      </div>
    </div>
  );
}

export default Dashboard;
