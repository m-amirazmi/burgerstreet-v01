import { Link } from "react-router-dom";
import menu from "../../data/menu.json";
import SidebarLinks from "./sidebar-links";
import { useEffect, useRef, useState } from "react";

export default function Sidebar() {
  const logoRef = useRef(null);

  const [logoHeight, setLogoHeight] = useState(0);

  useEffect(() => {
    const logoEl = logoRef.current;
    const getLogoElHeight = logoEl.getBoundingClientRect().height;
    setLogoHeight(getLogoElHeight);
  }, []);

  return (
    <div className="max-w-[300px] h-screen bg-zinc-50 w-full border-r sticky top-0 left-0">
      <Link ref={logoRef} to="/" className="p-6 border-b block">
        Logo
      </Link>
      <div
        className={`relative py-6 overflow-scroll scrollbar-hide`}
        style={{ height: `calc(100vh - ${logoHeight}px)` }}
      >
        {menu.map((m) => (
          <div className="px-6 pb-6" key={m.category_id}>
            <h5 className="uppercase tracking-widest text-xs mb-2 text-zinc-500">
              {m.category}
            </h5>
            {m.links &&
              m.links.map((m) => (
                <div key={m.id}>
                  <SidebarLinks {...m} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
