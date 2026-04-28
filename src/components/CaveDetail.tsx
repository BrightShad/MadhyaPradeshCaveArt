import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";
import type { Cave } from "@/data/caves";

type Props = { 
  cave: Cave; 
  prevCave?: Cave;
  nextCave?: Cave;
  onNavigate?: (id: string) => void;
};

export function CaveDetail({ cave, prevCave, nextCave, onNavigate }: Props) {
  const [open, setOpen] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Automatic scroller for images
  useEffect(() => {
    if (!cave.images || cave.images.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % cave.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cave.images]);

  return (
    <motion.article
      key={cave.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="overflow-hidden bg-transparent"
    >
      <div className="relative h-56 w-full overflow-hidden md:h-72 bg-stone-900 border-b border-border/60">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={imageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={cave.images?.[imageIndex] || cave.images?.[0]}
            alt={cave.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div
          className="absolute inset-0 z-10"
          style={{ background: "var(--gradient-mural)" }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5 z-20">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-ochre font-bold drop-shadow-md">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> {cave.region}
            </span>
            <span className="inline-flex items-center gap-1.5 hidden sm:flex">
              <Clock className="h-3 w-3" /> {cave.era}
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-4xl text-bone md:text-5xl drop-shadow-lg font-semibold">
            {cave.name}
          </h3>
        </div>
      </div>

      <div className="space-y-4 p-5 md:p-6 lg:p-8">
        <p className="font-display text-xl italic leading-relaxed text-bone md:text-2xl font-medium">
          {cave.tagline}
        </p>

        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ochre">
            Images
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2 pr-1 snap-x snap-mandatory custom-scrollbar">
            {cave.images.map((image, idx) => (
              <button
                key={`${cave.id}-gallery-${idx}`}
                onClick={() => setExpandedImage(image)}
                className="h-28 min-w-44 snap-start overflow-hidden rounded-lg border border-border/60 bg-stone-900"
              >
                <img
                  src={image}
                  alt={`${cave.name} gallery image ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {cave.sections.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.heading}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-ochre"
                >
                  <span className="font-display text-xl tracking-wide font-bold text-bone">
                    {s.heading}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-ochre"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-[17px] leading-relaxed text-bone/95">
                        {s.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Next / Previous Footer */}
        {onNavigate && (prevCave || nextCave) && (
          <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
            <div className="flex-1 flex justify-start">
              {prevCave && (
                <button 
                  onClick={() => onNavigate(prevCave.id)}
                  className="group flex items-center gap-3 text-left transition-colors"
                >
                  <span className="text-2xl font-light text-muted-foreground group-hover:text-ochre">←</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-ochre">Previous</span>
                    <span className="font-display text-base sm:text-lg text-bone/90 group-hover:text-ochre transition-colors">{prevCave.name}</span>
                  </div>
                </button>
              )}
            </div>
            <div className="flex-1 flex justify-end">
              {nextCave && (
                <button 
                  onClick={() => onNavigate(nextCave.id)}
                  className="group flex items-center gap-3 text-right transition-colors"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-ochre">Next</span>
                    <span className="font-display text-base sm:text-lg text-bone/90 group-hover:text-ochre transition-colors">{nextCave.name}</span>
                  </div>
                  <span className="text-2xl font-light text-muted-foreground group-hover:text-ochre">→</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {expandedImage && (
          <motion.button
            type="button"
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={expandedImage}
              alt={`${cave.name} full view`}
              className="max-h-[92vh] w-auto max-w-[96vw] rounded-lg object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
