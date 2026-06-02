import { Outlet, useLocation } from "react-router-dom";

// import Footer from "./Footer";
import SideNavigation from "./SidebarMenu";

function AppLayout() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";
  return (
    <div
      className={`${!isWelcomePage ? "grid grid-cols-[16rem_1fr] gap-10" : "flex items-center justify-center"} h-screen`}
    >
      <SideNavigation />
      <div className="overflow-scroll">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
