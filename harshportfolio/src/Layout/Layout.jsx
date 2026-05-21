import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 bg-taupe-500">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
