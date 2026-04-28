import { motion } from "framer-motion";
import type { Cave } from "@/data/caves";

// We use a high-quality relief map from Wikimedia so it works immediately without local file dependency.
// Feel free to replace this URL with the local image import if you prefer.
const mapBgUrl = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Madhya_Pradesh_relief_location_map.jpg";

type Props = {
  caves: Cave[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function MPMap({ caves, activeId, onSelect }: Props) {
  // Precise equirectangular bounds for the Wikimedia MP relief map
  const MIN_LON = 73.8;
  const MAX_LON = 83.0;
  const MIN_LAT = 21.0;
  const MAX_LAT = 27.0;

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center border border-border/50 rounded-xl overflow-hidden bg-stone-900/50">
      <img
        src={mapBgUrl}
        alt="Madhya Pradesh Map"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center" }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none">
        {caves.map((c) => {
          const active = c.id === activeId;
          const leftPercent = ((c.lng - MIN_LON) / (MAX_LON - MIN_LON)) * 100;
          const topPercent = ((MAX_LAT - c.lat) / (MAX_LAT - MIN_LAT)) * 100;

          return (
            <motion.button
              key={c.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(c.id);
              }}
              className="absolute group pointer-events-auto"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{ scale: 1.1 }}
            >
              {/* glow effect */}
              {active && (
                <div className="absolute inset-0 rounded-full bg-ochre/40 blur-md pointer-events-none" />
              )}
              {/* dot */}
              <div
                className={`relative h-4 w-4 rounded-full border-2 transition-colors ${
                  active
                    ? "bg-ochre border-bone shadow-[0_0_15px_oklch(0.72_0.17_55)]"
                    : "bg-ochre/80 border-stone-800 shadow-md group-hover:bg-ochre group-hover:border-stone-900 group-hover:scale-110"
                }`}
              />
              {/* label */}
              <div
                className={`absolute left-1/2 -top-6 -translate-x-1/2 whitespace-nowrap text-xs font-bold font-sans tracking-wide transition-colors ${
                  active ? "text-stone-100 drop-shadow-md bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm" : "text-stone-950 font-extrabold group-hover:text-stone-900"
                }`}
              >
                {c.name.split(" ")[0]}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
