import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRight from "../icons/chevron-right";
import ChevronDown from "../icons/chevron-down";

export default function SidebarLinks({ title, link, submenu, sub }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div
      className={`text-sm text-zinc-700 my-1 ${
        open && submenu ? "bg-zinc-300/20 border" : ""
      }`}
    >
      <Link
        to={link}
        className={`flex items-center cursor-pointer pl-4 pr-2 py-2 hover:bg-zinc-300/20 hover:text-zinc-900 ${
          sub ? "pl-6" : ""
        }`}
        onClick={handleOpen}
      >
        <span>{title}</span>
        {submenu && submenu.length > 0 && (
          <div className="ml-auto w-4 h-4">
            {open ? <ChevronDown /> : <ChevronRight />}
          </div>
        )}
      </Link>
      <div className={open ? "block" : "hidden"}>
        {submenu &&
          submenu.map((sm) => (
            <SidebarLinks key={sm.id} {...sm} open={open} sub={true} />
          ))}
      </div>
    </div>
  );
}
