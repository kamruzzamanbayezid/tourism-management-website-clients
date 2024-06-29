import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Menubar from "../Components/Menubar/Menubar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
      return (
            <div>
                  <Navbar />
                  <div className="flex lg:hidden">
                        <Menubar />
                  </div>
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default MainLayout;