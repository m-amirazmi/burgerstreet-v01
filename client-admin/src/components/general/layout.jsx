import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full min-h-screen bg-zinc-100">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
