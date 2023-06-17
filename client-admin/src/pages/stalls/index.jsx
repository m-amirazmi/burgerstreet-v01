import { useEffect, useState } from "react";
import IconArrowRight from "../../components/icons/icon-arrow-right";
import IconLocation from "../../components/icons/icon-location";
import { api } from "../../utils/configs";

export default function Stalls() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchStalls = async () => {
      const { data } = await api.get("/stalls");
      setData(data);
    };
    fetchStalls();
  }, []);

  return (
    <div className="text-zinc-700 flex flex-col gap-6">
      <div className="flex gap-8">
        {data && data.stalls && (
          <div className="w-6/12 flex flex-col gap-4">
            {[
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
              ...data.stalls,
            ].map((i) => {
              const statusStyles = {
                pending: "bg-amber-500/10 text-amber-500",
                verified: "bg-green-500/10 text-green-500",
                rejected: "bg-red-500/10 text-red-500",
                unlisted: "bg-zinc-500/10 text-zinc-500",
              };
              return (
                <div
                  key={i._id}
                  className="p-4 w-full border flex cursor-pointer hover:border-blue-500 hover:bg-blue-500/5 active:translate-y-0.5 transition-color duration-200 gap-4 rounded-lg"
                >
                  <div className="w-1/5">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={i.image_urls[0]}
                      alt={i.name}
                    />
                  </div>
                  <div className="w-4/5 flex gap-1 flex-col">
                    <div className="flex items-center justify-between">
                      <h5 className="text-lg text-zinc-700">{i.name}</h5>
                      <span
                        className={`${
                          statusStyles[i.is_verified]
                        } uppercase text-xs ml-auto px-4 py-1 rounded-full`}
                      >
                        {i.is_verified}
                      </span>
                    </div>
                    <div className="flex items-center text-zinc-400 text-sm gap-1">
                      <span>
                        <IconLocation />
                      </span>
                      <span>{i.location.city}</span>
                      <span>|</span>
                      <span>{i.location.country}</span>
                    </div>

                    {/* Burger Types */}
                    <div className="text-xs text-zinc-700 flex gap-2 mt-3">
                      <span className="bg-fuchsia-500/20 rounded-full text-fuchsia-500 px-4 py-1">
                        Square
                      </span>
                      <span className="bg-fuchsia-500/20 rounded-full text-fuchsia-500 px-4 py-1">
                        Round
                      </span>
                      <span className="bg-fuchsia-500/20 rounded-full text-fuchsia-500 px-4 py-1">
                        +
                      </span>
                    </div>

                    {/* Burger Options & View Details */}
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-zinc-700 flex gap-2">
                        <span className="bg-cyan-500/20 rounded-full text-cyan-500 px-4 py-1">
                          Chicken
                        </span>
                        <span className="bg-cyan-500/20 rounded-full text-cyan-500 px-4 py-1">
                          Meat
                        </span>
                        <span className="bg-cyan-500/20 rounded-full text-cyan-500 px-4 py-1">
                          +
                        </span>
                      </div>
                      <p className="text-sm flex items-center gap-1 text-blue-500">
                        <span>View Details</span>
                        <span>
                          <IconArrowRight />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="w-6/12">
          <div
            className="border rounded-lg p-4 sticky top-[95px] left-0"
            style={{ height: "calc(100vh - 120px)" }}
          >
            This is the brief detail section
          </div>
        </div>
      </div>
    </div>
  );
}
