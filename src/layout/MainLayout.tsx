import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/Navbar";
import Footer from "../pages/home/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1160px] mx-auto px-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
