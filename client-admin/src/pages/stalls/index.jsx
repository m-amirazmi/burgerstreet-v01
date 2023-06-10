import { useEffect, useState } from "react";
import { api } from "../../utils/configs";

export default function Stalls() {
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    const getStalls = async () => {
      const { data } = await api.get("/stalls");
      if (data.count < 1) return;
      setStalls(data.stalls);
    };
    getStalls();
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full mx-auto text-zinc-700">
      <div className="w-full flex items-center gap-4">
        <div className="w-full h-32 bg-zinc-500/20 flex items-center justify-center">
          Number of Stalls
        </div>
        <div className="w-full h-32 bg-zinc-500/20 flex items-center justify-center">
          Number of Active Stalls
        </div>
        <div className="w-full h-32 bg-zinc-500/20 flex items-center justify-center">
          Number of Archived Stalls
        </div>
      </div>

      {/* LISTINGS */}
      <div>This is listings area</div>

      {/* OVERVIEW OF STALL */}
    </div>
  );
}
