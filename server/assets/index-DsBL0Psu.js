import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MapPin, Clock, ChevronDown } from "lucide-react";
const heroMural = "/MadhyaPradeshCaveArt/assets/hero-mural-DSCj4RXH.jpg";
const docCave01 = "/MadhyaPradeshCaveArt/assets/doc-cave-01-CTT8TZFp.png";
const docCave02 = "/MadhyaPradeshCaveArt/assets/doc-cave-02-C9-XKUrf.png";
const docCave03 = "/MadhyaPradeshCaveArt/assets/doc-cave-03-Did0NopL.png";
const docCave04 = "/MadhyaPradeshCaveArt/assets/doc-cave-04-Lr5qdn3d.png";
const docCave05 = "/MadhyaPradeshCaveArt/assets/doc-cave-05-BvXuXW1o.png";
const docCave06 = "/MadhyaPradeshCaveArt/assets/doc-cave-06-CzyJiW9o.png";
const docCave07 = "/MadhyaPradeshCaveArt/assets/doc-cave-07-nKqUfHEf.png";
const docCave08 = "/MadhyaPradeshCaveArt/assets/doc-cave-08-CTfTlbko.png";
const docCave09 = "/MadhyaPradeshCaveArt/assets/doc-cave-09-BVvXj7ZG.png";
const docCave10 = "/MadhyaPradeshCaveArt/assets/doc-cave-10-BIXEKxos.png";
const docCave11 = "/MadhyaPradeshCaveArt/assets/doc-cave-11-KZMA5BPv.png";
const docCave12 = "/MadhyaPradeshCaveArt/assets/doc-cave-12-CLgET_kX.png";
const docCave13 = "/MadhyaPradeshCaveArt/assets/doc-cave-13-BOSc3zhB.png";
const docCave14 = "/MadhyaPradeshCaveArt/assets/doc-cave-14-CPzNmuFO.png";
const caves = [
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    region: "Raisen District, Ratapani Sanctuary",
    era: "Acheulian to Late Mesolithic",
    tagline: "Oldest known rock art in India. Shows continuous 10,000-year artistic record in a single location.",
    images: [docCave01, docCave02, docCave03],
    lat: 22.9364,
    lng: 77.612,
    sections: [
      {
        heading: "Location & Context",
        body: "Situated within the Ratapani Wildlife Sanctuary in the Raisen District, these shelters are part of the massive Vindhya Range sandstone formation. The site covers a core area of 1,892 hectares."
      },
      {
        heading: "History",
        body: "Discovered by Dr. V.S. Wakankar in 1957, the site was systematically excavated between 1972 and 1977. While 750 shelters exist, Shelter III F-23 (The Auditorium Cave) and Shelter II C-15 (Zoo Rock) are the most famous. Zoo Rock alone contains 453 figures across 16 different species."
      },
      {
        heading: "Art Style & Form",
        body: "The paintings utilize a superimposition technique where newer works are painted directly over faded ones. The oldest figures are large, dark red S shaped linear forms. The pigments were made by grinding hematite (geru) for reds, maganese for blacks, and kaolin for whites, mixed with animal fat or resin."
      },
      {
        heading: "Importance",
        body: "It is a UNESCO World Heritage Site (2003) because it provides a continuous record of human evolution from the Acheulian (Lower Paleolithic) to the Late Mesolithic. It is the only site in India that documents the transition from hunter-gatherer life to symbolic, ritualistic expression."
      },
      {
        heading: "Conservation",
        body: "Managed by the Archaeological Survey of India (ASI). The biggest threat is biophysical weathering - the growth of lichen and algae that feed on the mineral pigments, slowly erasing the outlines."
      }
    ]
  },
  {
    id: "bagh",
    name: "Bagh Caves",
    region: "Dhar District, Vindhya Slopes",
    era: "Gupta-Vakataka era",
    tagline: "Rock-cut Buddhist monuments excavated into sandstone cliffs above the Baghini River. Often called 'Ajanta of Madhya Pradesh.'",
    images: [docCave04, docCave05, docCave06],
    lat: 22.3234,
    lng: 74.8062,
    sections: [
      {
        heading: "Location & Context",
        body: "Located on the southern slopes of the Vindhyas in Dhar District. These are nine rock-cut chambers (Viharas) excavated into a 20-meter high perpendicular sandstone cliff."
      },
      {
        heading: "History",
        body: "Commissioned during the height of the Gupta-Vakataka era. A copper plate inscription found in Cave 2 refers to a donation by King Subandhu of Mahishmati in 416 CE. It remained a vibrant center of Mahayana Buddhism until the 7th century when it was abandoned."
      },
      {
        heading: "Art Style & Form",
        body: "These are not true frescoes (wet plaster) but Tempera murals. The artists applied a thick mud-plaster (ground clay, lime, and jute) over the rock, then painted on the dry surface. Cave 4 (Rang Mahal) is the masterpiece, featuring the famous Halla-shaka dance scene and mourning princess motifs."
      },
      {
        heading: "Importance",
        body: "Bagh is the only contemporary rival to Ajanta. While Ajanta is purely religious, Bagh includes secular themes - fashion, courtly hairstyles, and musical instruments - providing a rare look at the high culture of the Gupta Golden Age."
      },
      {
        heading: "Conservation",
        body: "Most original murals are now in the Gujari Mahal Museum. The rock at Bagh is ferruginous sandstone, which is extremely prone to salt-action and crumbling, leading to the collapse of Caves 7, 8, and 9."
      }
    ]
  },
  {
    id: "adamgarh",
    name: "Adamgarh Rock Shelters",
    region: "Left Bank, Narmada River",
    era: "Mesolithic and early herding phases",
    tagline: "Earliest evidence of animal domestication in India depicted in art, spanning over 10,000 years of history.",
    images: [docCave07, docCave08],
    lat: 22.739,
    lng: 77.731,
    sections: [
      {
        heading: "Location & Context",
        body: "Located on the left bank of the Narmada River. The hills are composed of orthoquartzite and sandstone."
      },
      {
        heading: "History",
        body: "First reported by Manoranjan Ghosh in 1922 and later excavated by R.V. Joshi in 1960. The excavations yielded over 25,000 microliths (small stone tools), indicating it was a massive factory site for prehistoric tool-making."
      },
      {
        heading: "Art Style & Form",
        body: "The style is distinctly Mesolithic Miniature. The figures are small, dynamic, and focused on movement. Shelter No. 10 contains the controversial giraffe-like figure, which some scholars argue is actually a stylized long-necked horse or deer, while others insist it proves trans-oceanic contact."
      },
      {
        heading: "Importance",
        body: "It provides the earliest carbon-dated evidence (c. 5500 BCE) of the domestication of cattle, dogs, and goats in Central India. It marks the shift from the Paleolithic killer mindset to the Neolithic herder mindset."
      },
      {
        heading: "Conservation",
        body: "The site is heavily exposed to the elements. Recent ASI reports mention that modern soot and smoke-damage from nearby settlements have begun to darken the white-pigmented figures."
      }
    ]
  },
  {
    id: "pachmarhi",
    name: "Pachmarhi Rock Shelters",
    region: "Mahadeo Hills, Satpura",
    era: "High-altitude shelter phases",
    tagline: "Demonstrates the full arc of human cultural evolution — from hunting to agriculture to spiritual practice — across a single region.",
    images: [docCave09, docCave10],
    lat: 22.4675,
    lng: 78.434,
    sections: [
      {
        heading: "Location & Context",
        body: "Located in the Mahadeo Hills. The shelters are situated at altitudes of 1,000 meters and above, often requiring steep climbs through dense teak forests."
      },
      {
        heading: "History",
        body: "While local tribes (Gonds and Korkus) always knew of them, they were brought to academic light by D.H. Gordon in the 1930s. Sites like Dorothy Deep, Bania Beri, and Monte Rosa are the primary clusters."
      },
      {
        heading: "Art Style & Form",
        body: "Unique for their X-ray style where internal organs or bone structures of animals are sometimes visible. The palette is dominated by Creamy White and Lemon Yellow, which is rare compared to the red-heavy Bhimbetka sites."
      },
      {
        heading: "Importance",
        body: "Part of the UNESCO Pachmarhi Biosphere Reserve. The art here is exceptionally narrative - it does not just show animals; it shows the gathering of honey, the playing of flutes, and complex tribal warfare, acting as a visual ethnography."
      },
      {
        heading: "Conservation",
        body: "Protected by the Satpura Tiger Reserve regulations. This buffer zone protection has kept the sites cleaner than most, though high humidity in the hills causes seasonal blooming of fungi on the cave ceilings."
      }
    ]
  },
  {
    id: "chaturbhuj",
    name: "Chaturbhuj Nala",
    region: "Near Gandhi Sagar, Mandsaur District",
    era: "Hunter-gatherer to Chariot Era",
    tagline: "One of the densest concentrations of rock paintings in a single accessible trail in MP. A living open-air gallery.",
    images: [docCave11, docCave12],
    lat: 22.48,
    lng: 78.41,
    sections: [
      {
        heading: "Location & Context",
        body: "Located near the Gandhi Sagar Sanctuary in Mandsaur District. The site stretches along a narrow ravine (Nala) for nearly 5 kilometers."
      },
      {
        heading: "History",
        body: "Discovered in 1977 by Ramesh Kumar Pancholi. This site is massive; it contains thousands of individual figures, making it one of the largest rock art galleries in the world by volume."
      },
      {
        heading: "Art Style & Form",
        body: "Famous for its Dynamic Action scenes. The warriors are shown with intricate headgears and bows. It features a unique transition from the hunter-gatherer style to the Chariot Era, showing early wheeled transport which is absent in older caves."
      },
      {
        heading: "Importance",
        body: "It is the best site to study the Technological Evolution of ancient India. You can literally walk the trail and see the weapons change from stone-tipped spears to metal swords and chariots."
      },
      {
        heading: "Conservation",
        body: "Its sheer length makes it impossible to fence off. It is currently being documented by the Rock Art Society of India (RASI) to create a digital map before natural weathering erodes the cliff faces."
      }
    ]
  },
  {
    id: "nagori",
    name: "Nagori Rock Shelters",
    region: "Opposite Sanchi Stupa (Hill 1)",
    era: "Proto-iconographic phase",
    tagline: "A rare bridge between prehistoric geometric imagery and later sacred iconography centered around a monumental Naga motif.",
    images: [docCave13, docCave14],
    lat: 23.456,
    lng: 77.739,
    sections: [
      {
        heading: "Location & Context",
        body: "Located on a small hillock exactly opposite the Sanchi Stupa (Hill 1)."
      },
      {
        heading: "History",
        body: "Surveyed as part of the Sanchi Environs project. These shelters were inhabited by the same artisan communities that likely helped build the stone railings and gateways of the Sanchi Stupa."
      },
      {
        heading: "Art Style & Form",
        body: "The defining feature is the Anthropomorphic Naga. The figure has a human torso but a serpentine lower body and a multi-hooded cobra canopy. The style is Proto-Iconographic - it is the bridge between a shamanic drawing and a temple idol."
      },
      {
        heading: "Importance",
        body: "It proves that Sanchi was a sacred landscape long before the Buddhists arrived. It shows that the local Naga-cult (serpent worship) was integrated into early Buddhist and Hindu thought."
      },
      {
        heading: "Conservation",
        body: "Critical. Unlike Sanchi, Nagori has no permanent guards or ticketing. It is frequently used by locals for grazing, and the Naga mural is at high risk of being lost to smoke and soot from small fires lit inside the shelter."
      }
    ]
  }
];
function CaveDetail({ cave, prevCave, nextCave, onNavigate }) {
  const [open, setOpen] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  useEffect(() => {
    if (!cave.images || cave.images.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % cave.images.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [cave.images]);
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.45, ease: "easeOut" },
      className: "overflow-hidden bg-transparent",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-56 w-full overflow-hidden md:h-72 bg-stone-900 border-b border-border/60", children: [
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsx(
            motion.img,
            {
              initial: { opacity: 0, scale: 1.05 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0 },
              transition: { duration: 1 },
              src: cave.images?.[imageIndex] || cave.images?.[0],
              alt: cave.name,
              className: "absolute inset-0 h-full w-full object-cover"
            },
            imageIndex
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 z-10",
              style: { background: "var(--gradient-mural)" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 z-20", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-ochre font-bold drop-shadow-md", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
                " ",
                cave.region
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 hidden sm:flex", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
                " ",
                cave.era
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1.5 font-display text-4xl text-bone md:text-5xl drop-shadow-lg font-semibold", children: cave.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-5 md:p-6 lg:p-8", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl italic leading-relaxed text-bone md:text-2xl font-medium", children: cave.tagline }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-ochre", children: "Images" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-3 overflow-x-auto pb-2 pr-1 snap-x snap-mandatory custom-scrollbar", children: cave.images.map((image, idx) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setExpandedImage(image),
                className: "h-28 min-w-44 snap-start overflow-hidden rounded-lg border border-border/60 bg-stone-900",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: image,
                    alt: `${cave.name} gallery image ${idx + 1}`,
                    className: "h-full w-full object-cover",
                    loading: "lazy"
                  }
                )
              },
              `${cave.id}-gallery-${idx}`
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "divide-y divide-border/60 border-y border-border/60", children: cave.sections.map((s, i) => {
            const isOpen = open === i;
            return /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpen(isOpen ? -1 : i),
                  className: "flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-ochre",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-display text-xl tracking-wide font-bold text-bone", children: s.heading }),
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        animate: { rotate: isOpen ? 180 : 0 },
                        transition: { duration: 0.25 },
                        className: "text-ochre",
                        children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "pb-5 pr-8 text-[17px] leading-relaxed text-bone/95", children: s.body })
                }
              ) })
            ] }, s.heading);
          }) }),
          onNavigate && (prevCave || nextCave) && /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-border/60 pt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-start", children: prevCave && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => onNavigate(prevCave.id),
                className: "group flex items-center gap-3 text-left transition-colors",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-2xl font-light text-muted-foreground group-hover:text-ochre", children: "←" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-ochre", children: "Previous" }),
                    /* @__PURE__ */ jsx("span", { className: "font-display text-base sm:text-lg text-bone/90 group-hover:text-ochre transition-colors", children: prevCave.name })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-end", children: nextCave && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => onNavigate(nextCave.id),
                className: "group flex items-center gap-3 text-right transition-colors",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-ochre", children: "Next" }),
                    /* @__PURE__ */ jsx("span", { className: "font-display text-base sm:text-lg text-bone/90 group-hover:text-ochre transition-colors", children: nextCave.name })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-2xl font-light text-muted-foreground group-hover:text-ochre", children: "→" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: expandedImage && /* @__PURE__ */ jsx(
          motion.button,
          {
            type: "button",
            onClick: () => setExpandedImage(null),
            className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: expandedImage,
                alt: `${cave.name} full view`,
                className: "max-h-[92vh] w-auto max-w-[96vw] rounded-lg object-contain"
              }
            )
          }
        ) })
      ]
    },
    cave.id
  );
}
function Index() {
  const [activeId, setActiveId] = useState(null);
  const active = activeId ? caves.find((c) => c.id === activeId) : null;
  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Hero, { onExplore: () => void 0 }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: active ? /* @__PURE__ */ jsx(motion.section, { id: "detail-section", initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -30
    }, transition: {
      duration: 0.5
    }, className: "fixed inset-0 z-50 overflow-y-auto bg-background/95 px-5 pb-24 pt-8 backdrop-blur-sm md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-5xl", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        setActiveId(null);
        requestAnimationFrame(() => document.getElementById("gallery-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        }));
      }, className: "mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ochre transition-colors hover:text-ochre/80", children: "← Back to Sites" }),
      /* @__PURE__ */ jsx(CaveDetail, { cave: active, prevCave: caves[(caves.findIndex((c) => c.id === active.id) - 1 + caves.length) % caves.length], nextCave: caves[(caves.findIndex((c) => c.id === active.id) + 1) % caves.length], onNavigate: (id) => {
        setActiveId(id);
        requestAnimationFrame(() => {
          const detailSection = document.getElementById("detail-section");
          detailSection?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
      } })
    ] }) }, "detail") : /* @__PURE__ */ jsxs(motion.section, { id: "gallery-section", initial: {
      opacity: 0,
      y: 40
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      scale: 0.95
    }, transition: {
      duration: 0.7,
      ease: "easeOut"
    }, className: "relative mx-auto w-full px-5 pb-16 pt-8 md:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("img", { src: heroMural, alt: "Cave wall", className: "h-full w-full object-cover opacity-30 mix-blend-overlay" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-stone-950/80" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsx("header", { className: "mb-8 max-w-4xl", children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold uppercase tracking-[0.18em] text-bone md:text-3xl", children: "Cave Sites" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", children: caves.map((cave) => /* @__PURE__ */ jsxs("button", { onClick: () => {
          setActiveId(cave.id);
          setTimeout(() => document.getElementById("detail-section")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          }), 120);
        }, className: "group overflow-hidden rounded-2xl border border-border/60 bg-card/60 text-left transition hover:border-border/80", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-44 overflow-hidden", children: [
            /* @__PURE__ */ jsx("img", { src: cave.images?.[0], alt: cave.name, className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-bone", children: cave.name }) })
        ] }, cave.id)) })
      ] })
    ] }, "gallery") }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 right-6 z-50", children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "inline-flex items-center rounded-lg border border-border/70 bg-card/80 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-bone shadow-md backdrop-blur-sm transition-colors hover:border-ochre/50 hover:text-ochre", children: "About Us" }) })
  ] });
}
function Hero({
  onExplore
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate flex min-h-[88svh] items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs(motion.div, { className: "absolute inset-0 -z-10", animate: {
      scale: 1
    }, transition: {
      duration: 1.2,
      ease: "easeOut"
    }, children: [
      /* @__PURE__ */ jsx("img", { src: heroMural, alt: "Bhimbetka-style cave mural with elephants, deer and hand prints", width: 1920, height: 1080, className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(180deg, oklch(0.16 0.02 50 / 0.55) 0%, oklch(0.16 0.02 50 / 0.35) 40%, oklch(0.16 0.02 50 / 0.92) 100%)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "grain absolute inset-0" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-6xl px-5 md:px-8", children: [
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.1
      }, className: "mt-5 max-w-3xl font-display font-extrabold text-6xl leading-[1.02] text-bone md:text-7xl lg:text-8xl drop-shadow-xl", children: [
        "The Caves of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "italic text-ochre font-bold", children: "Madhya Pradesh" })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.25
      }, className: "mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-bone md:text-2xl drop-shadow-md", children: "Thirty thousand years of human imagination — painted, carved and chiselled into the sandstone heart of India. Step inside." }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.4
      }, className: "mt-10 flex flex-wrap items-center gap-4", children: /* @__PURE__ */ jsx("button", { onClick: () => {
        onExplore();
        requestAnimationFrame(() => document.getElementById("gallery-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        }));
      }, className: "group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ochre px-10 py-4 text-lg font-extrabold uppercase tracking-[0.24em] text-ochre-foreground transition-all hover:bg-ochre/90", children: /* @__PURE__ */ jsx("span", { className: "relative", children: "Explore the caves" }) }) })
    ] })
  ] });
}
export {
  Index as component
};
