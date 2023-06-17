import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full min-h-screen bg-zinc-50">
        <Navbar />
        <div className="py-6 px-8 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
