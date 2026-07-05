import Header from "./features/board/Header";
import PriorityBorad from "./features/board/PriorityBorad";
import SideNavBar from "./features/board/SideNavBar";

const Body = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-200 font-sans select-none">
      <SideNavBar />
      <div className="h-screen w-screen">
        <Header />
        <PriorityBorad />
      </div>
    </div>
  );
};

export default Body;
