import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
