import Sidebar from "./sidebar";

export default function LayoutMain({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full min-h-screen bg-zinc-100">
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}
