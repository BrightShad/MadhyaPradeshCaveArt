import { motion } from "framer-motion";
import type { Cave } from "@/data/caves";

type Props = {
  caves: Cave[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function CaveList({ caves, activeId, onSelect }: Props) {
  return (
    <ul className="space-y-2">
      {caves.map((c, i) => {
        const active = c.id === activeId;
        return (
          <motion.li
            key={c.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              onClick={() => onSelect(c.id)}
              className={`group flex w-full items-center gap-3 rounded-xl border p-2 pr-4 text-left transition-all ${
                active
                  ? "border-ochre/60 bg-ochre/10 shadow-glow"
                  : "border-border bg-card/40 hover:border-ochre/30 hover:bg-card"
              }`}
            >
              <div className="relative h-14 w-14 flex-none overflow-hidden rounded-lg">
                <img
                  src={c.images?.[0]}
                  alt=""
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className={`truncate font-display text-base leading-tight ${
                    active ? "text-ochre" : "text-bone"
                  }`}
                >
                  {c.name}
                </div>
                <div className="truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.region}
                </div>
              </div>
              <span
                className={`h-2 w-2 flex-none rounded-full transition ${
                  active ? "bg-ochre" : "bg-border group-hover:bg-ochre/50"
                }`}
              />
            </button>
          </motion.li>
        );
      })}
    </ul>
  );
}
