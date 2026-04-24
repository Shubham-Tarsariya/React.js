import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import NavBar from "./Layout/NavBar";
import SideBar from "./Layout/SideBar";

const App = () => {
  return (
    // 1. Full screen container with no body scroll
    <div className="flex h-screen overflow-hidden bg-white">
      
      {/* 2. SIDEBAR - Left side fixed width */}
      <aside className="w-14 border-r border-gray-200 shrink-0">
        <SideBar />
      </aside>

      {/* 3. MAIN AREA - Navbar + Page Content */}
      <div className="flex flex-col flex-1 min-w-0">
        
        {/* NAV BAR - Top sticky */}
        <header className="sticky top-0 z-50 bg-white py-4">
          <NavBar />
        </header>

        {/* PAGE CONTENT - Scrollable area */}
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        
      </div>
    </div>
  );
};

export default App;