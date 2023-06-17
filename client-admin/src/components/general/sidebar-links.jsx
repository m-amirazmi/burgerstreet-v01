import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ChevronRight from "../icons/chevron-right";
import ChevronDown from "../icons/chevron-down";
import { icons } from "../icons";

export default function SidebarLinks({
  title,
  link,
  submenu,
  sub,
  icon,
  main_id,
}) {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const handleOpen = () => setOpen(!open);

  const Component = link ? Link : "button";
  const Icon = icon ? icons[icon] : "";

  let highlighted = "";
  if (link && link === pathname) highlighted = "text-blue-500";
  if (!link && main_id && pathname.includes(main_id))
    highlighted = "text-blue-500";

  return (
    <div className={`text-sm text-zinc-700`}>
      <Component
        to={link}
        className={`flex items-center cursor-pointer pl-4 pr-2 py-3 hover:bg-blue-500/5 hover:text-blue-500 w-full gap-3 transition-all duration-100 ${
          sub ? "pl-12" : "mt-2"
        } ${highlighted}`}
        onClick={handleOpen}
      >
        {Icon && <Icon />}
        <span>{title}</span>
        {submenu && submenu.length > 0 && (
          <div className="ml-auto w-4 h-4">
            {open ? <ChevronDown /> : <ChevronRight />}
          </div>
        )}
      </Component>
      <div className={open ? "block" : "hidden"}>
        {submenu &&
          submenu.map((sm) => (
            <SidebarLinks key={sm.id} {...sm} open={open} sub={true} />
          ))}
      </div>
    </div>
  );
}
