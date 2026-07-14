import { useState } from "react";
import BoardDescription from "./features/board/BoardDescription";
import Header from "./features/board/Header";
import PriorityBorad from "./features/board/PriorityBorad";
import SideNavBar from "./features/board/SideNavBar";
import DragDropMain from "./features/dragdrop/DragDropMain";
import HelpPage from "./features/pages/HelpPage";
import { useKeyPressEvent } from "react-use";


const Body = () => {

  const [showHelpPage,setShowHelpPage] = useState(false);
  useKeyPressEvent("h",() => setShowHelpPage((prev) => !prev))

  const handleCloseHelpPage = () => {
    setShowHelpPage(false)
  }
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-200 font-sans select-none">
      <SideNavBar />
      <div className="h-screen w-screen">
        <Header />
        <PriorityBorad />
        {showHelpPage && <HelpPage onClose={handleCloseHelpPage}/>}
        <BoardDescription/>
        <DragDropMain/>
      </div>
    </div>
  );
};

export default Body;
