import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroMural from "@/assets/hero-mural.jpg";
import { caves } from "@/data/caves";
import { CaveDetail } from "@/components/CaveDetail";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Madhya Pradesh Cave Art" },
      {
        name: "description",
        content:
          "Explore the painted shelters and rock-cut sanctuaries of Madhya Pradesh through immersive image cards and site stories.",
      },
      { property: "og:title", content: "Caves of Madhya Pradesh" },
      {
        property: "og:description",
        content:
          "A visual journey through Madhya Pradesh's painted rock shelters and rock-cut caves.",
      },
    ],
  }),
});

function Index() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = activeId ? caves.find((c) => c.id === activeId) : null;

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero onExplore={() => undefined} />

      <AnimatePresence mode="wait">
        {active ? (
          <motion.section
            key="detail"
            id="detail-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-background/95 px-5 pb-24 pt-8 backdrop-blur-sm md:px-8"
          >
            <div className="mx-auto w-full max-w-5xl">
              <button
                onClick={() => {
                  setActiveId(null);
                  requestAnimationFrame(() =>
                    document
                      .getElementById("gallery-section")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" }),
                  );
                }}
                className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ochre transition-colors hover:text-ochre/80"
              >
                ← Back to Sites
              </button>
              <CaveDetail
                cave={active}
                prevCave={caves[(caves.findIndex((c) => c.id === active.id) - 1 + caves.length) % caves.length]}
                nextCave={caves[(caves.findIndex((c) => c.id === active.id) + 1) % caves.length]}
                onNavigate={(id) => {
                  setActiveId(id);
                  requestAnimationFrame(() =>
                    {
                      const detailSection = document.getElementById("detail-section");
                      detailSection?.scrollTo({ top: 0, behavior: "smooth" });
                    },
                  );
                }}
              />
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="gallery"
            id="gallery-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full px-5 pb-16 pt-8 md:px-8"
          >
            <div className="absolute inset-0 -z-10">
              <img
                src={heroMural}
                alt="Cave wall"
                className="h-full w-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-stone-950/80" />
            </div>

            <div className="mx-auto max-w-7xl">
              <header className="mb-8 max-w-4xl">
                <p className="text-2xl font-semibold uppercase tracking-[0.18em] text-bone md:text-3xl">
                  Cave Sites
                </p>
              </header>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {caves.map((cave) => (
                  <button
                    key={cave.id}
                    onClick={() => {
                      setActiveId(cave.id);
                      setTimeout(
                        () =>
                          document
                            .getElementById("detail-section")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
                        120,
                      );
                    }}
                    className="group overflow-hidden rounded-2xl border border-border/60 bg-card/60 text-left transition hover:border-border/80"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={cave.images?.[0]}
                        alt={cave.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-xl text-bone">{cave.name}</h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-6 z-50">
        <Link 
          to="/about" 
          className="inline-flex items-center rounded-lg border border-border/70 bg-card/80 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-bone shadow-md backdrop-blur-sm transition-colors hover:border-ochre/50 hover:text-ochre"
        >
          About Us
        </Link>
      </div>
    </main>
  );
}

function Hero({
  onExplore,
}: {
  onExplore: () => void;
}) {
  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden">
      {/* mural background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={heroMural}
          alt="Bhimbetka-style cave mural with elephants, deer and hand prints"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.02 50 / 0.55) 0%, oklch(0.16 0.02 50 / 0.35) 40%, oklch(0.16 0.02 50 / 0.92) 100%)",
          }}
        />
        <div className="grain absolute inset-0" />
      </motion.div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">


        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display font-extrabold text-6xl leading-[1.02] text-bone md:text-7xl lg:text-8xl drop-shadow-xl"
        >
          The Caves of{" "}
          <span className="italic text-ochre font-bold">Madhya Pradesh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-bone md:text-2xl drop-shadow-md"
        >
          Thirty thousand years of human imagination — painted, carved and
          chiselled into the sandstone heart of India. Step inside.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => {
              onExplore();
              requestAnimationFrame(() =>
                document
                  .getElementById("gallery-section")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" }),
              );
            }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ochre px-10 py-4 text-lg font-extrabold uppercase tracking-[0.24em] text-ochre-foreground transition-all hover:bg-ochre/90"
          >
            <span className="relative">Explore the caves</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
