import docCave01 from "@/assets/doc-cave-01.png";
import docCave02 from "@/assets/doc-cave-02.png";
import docCave03 from "@/assets/doc-cave-03.png";
import docCave04 from "@/assets/doc-cave-04.png";
import docCave05 from "@/assets/doc-cave-05.png";
import docCave06 from "@/assets/doc-cave-06.png";
import docCave07 from "@/assets/doc-cave-07.png";
import docCave08 from "@/assets/doc-cave-08.png";
import docCave09 from "@/assets/doc-cave-09.png";
import docCave10 from "@/assets/doc-cave-10.png";
import docCave11 from "@/assets/doc-cave-11.png";
import docCave12 from "@/assets/doc-cave-12.png";
import docCave13 from "@/assets/doc-cave-13.png";
import docCave14 from "@/assets/doc-cave-14.png";

export type CaveSection = { heading: string; body: string };

export type Cave = {
  id: string;
  name: string;
  region: string;
  era: string;
  tagline: string;
  images: string[];
  lat: number;
  lng: number;
  sections: CaveSection[];
};

export const caves: Cave[] = [
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    region: "Raisen District, Ratapani Sanctuary",
    era: "Acheulian to Late Mesolithic",
    tagline:
      "Oldest known rock art in India. Shows continuous 10,000-year artistic record in a single location.",
    images: [docCave01, docCave02, docCave03],
    lat: 22.9364,
    lng: 77.6120,
    sections: [
      {
        heading: "Location & Context",
        body: "Situated within the Ratapani Wildlife Sanctuary in the Raisen District, these shelters are part of the massive Vindhya Range sandstone formation. The site covers a core area of 1,892 hectares.",
      },
      {
        heading: "History",
        body: "Discovered by Dr. V.S. Wakankar in 1957, the site was systematically excavated between 1972 and 1977. While 750 shelters exist, Shelter III F-23 (The Auditorium Cave) and Shelter II C-15 (Zoo Rock) are the most famous. Zoo Rock alone contains 453 figures across 16 different species.",
      },
      {
        heading: "Art Style & Form",
        body: "The paintings utilize a superimposition technique where newer works are painted directly over faded ones. The oldest figures are large, dark red S shaped linear forms. The pigments were made by grinding hematite (geru) for reds, maganese for blacks, and kaolin for whites, mixed with animal fat or resin.",
      },
      {
        heading: "Importance",
        body: "It is a UNESCO World Heritage Site (2003) because it provides a continuous record of human evolution from the Acheulian (Lower Paleolithic) to the Late Mesolithic. It is the only site in India that documents the transition from hunter-gatherer life to symbolic, ritualistic expression.",
      },
      {
        heading: "Conservation",
        body: "Managed by the Archaeological Survey of India (ASI). The biggest threat is biophysical weathering - the growth of lichen and algae that feed on the mineral pigments, slowly erasing the outlines.",
      },
    ],
  },
  {
    id: "bagh",
    name: "Bagh Caves",
    region: "Dhar District, Vindhya Slopes",
    era: "Gupta-Vakataka era",
    tagline:
      "Rock-cut Buddhist monuments excavated into sandstone cliffs above the Baghini River. Often called 'Ajanta of Madhya Pradesh.'",
    images: [docCave04, docCave05, docCave06],
    lat: 22.3234,
    lng: 74.8062,
    sections: [
      {
        heading: "Location & Context",
        body: "Located on the southern slopes of the Vindhyas in Dhar District. These are nine rock-cut chambers (Viharas) excavated into a 20-meter high perpendicular sandstone cliff.",
      },
      {
        heading: "History",
        body: "Commissioned during the height of the Gupta-Vakataka era. A copper plate inscription found in Cave 2 refers to a donation by King Subandhu of Mahishmati in 416 CE. It remained a vibrant center of Mahayana Buddhism until the 7th century when it was abandoned.",
      },
      {
        heading: "Art Style & Form",
        body: "These are not true frescoes (wet plaster) but Tempera murals. The artists applied a thick mud-plaster (ground clay, lime, and jute) over the rock, then painted on the dry surface. Cave 4 (Rang Mahal) is the masterpiece, featuring the famous Halla-shaka dance scene and mourning princess motifs.",
      },
      {
        heading: "Importance",
        body: "Bagh is the only contemporary rival to Ajanta. While Ajanta is purely religious, Bagh includes secular themes - fashion, courtly hairstyles, and musical instruments - providing a rare look at the high culture of the Gupta Golden Age.",
      },
      {
        heading: "Conservation",
        body: "Most original murals are now in the Gujari Mahal Museum. The rock at Bagh is ferruginous sandstone, which is extremely prone to salt-action and crumbling, leading to the collapse of Caves 7, 8, and 9.",
      },
    ],
  },
  {
    id: "adamgarh",
    name: "Adamgarh Rock Shelters",
    region: "Left Bank, Narmada River",
    era: "Mesolithic and early herding phases",
    tagline:
      "Earliest evidence of animal domestication in India depicted in art, spanning over 10,000 years of history.",
    images: [docCave07, docCave08],
    lat: 22.7390,
    lng: 77.7310,
    sections: [
      {
        heading: "Location & Context",
        body: "Located on the left bank of the Narmada River. The hills are composed of orthoquartzite and sandstone.",
      },
      {
        heading: "History",
        body: "First reported by Manoranjan Ghosh in 1922 and later excavated by R.V. Joshi in 1960. The excavations yielded over 25,000 microliths (small stone tools), indicating it was a massive factory site for prehistoric tool-making.",
      },
      {
        heading: "Art Style & Form",
        body: "The style is distinctly Mesolithic Miniature. The figures are small, dynamic, and focused on movement. Shelter No. 10 contains the controversial giraffe-like figure, which some scholars argue is actually a stylized long-necked horse or deer, while others insist it proves trans-oceanic contact.",
      },
      {
        heading: "Importance",
        body: "It provides the earliest carbon-dated evidence (c. 5500 BCE) of the domestication of cattle, dogs, and goats in Central India. It marks the shift from the Paleolithic killer mindset to the Neolithic herder mindset.",
      },
      {
        heading: "Conservation",
        body: "The site is heavily exposed to the elements. Recent ASI reports mention that modern soot and smoke-damage from nearby settlements have begun to darken the white-pigmented figures.",
      },
    ],
  },
  {
    id: "pachmarhi",
    name: "Pachmarhi Rock Shelters",
    region: "Mahadeo Hills, Satpura",
    era: "High-altitude shelter phases",
    tagline:
      "Demonstrates the full arc of human cultural evolution — from hunting to agriculture to spiritual practice — across a single region.",
    images: [docCave09, docCave10],
    lat: 22.4675,
    lng: 78.4340,
    sections: [
      {
        heading: "Location & Context",
        body: "Located in the Mahadeo Hills. The shelters are situated at altitudes of 1,000 meters and above, often requiring steep climbs through dense teak forests.",
      },
      {
        heading: "History",
        body: "While local tribes (Gonds and Korkus) always knew of them, they were brought to academic light by D.H. Gordon in the 1930s. Sites like Dorothy Deep, Bania Beri, and Monte Rosa are the primary clusters.",
      },
      {
        heading: "Art Style & Form",
        body: "Unique for their X-ray style where internal organs or bone structures of animals are sometimes visible. The palette is dominated by Creamy White and Lemon Yellow, which is rare compared to the red-heavy Bhimbetka sites.",
      },
      {
        heading: "Importance",
        body: "Part of the UNESCO Pachmarhi Biosphere Reserve. The art here is exceptionally narrative - it does not just show animals; it shows the gathering of honey, the playing of flutes, and complex tribal warfare, acting as a visual ethnography.",
      },
      {
        heading: "Conservation",
        body: "Protected by the Satpura Tiger Reserve regulations. This buffer zone protection has kept the sites cleaner than most, though high humidity in the hills causes seasonal blooming of fungi on the cave ceilings.",
      },
    ],
  },
  {
    id: "chaturbhuj",
    name: "Chaturbhuj Nala",
    region: "Near Gandhi Sagar, Mandsaur District",
    era: "Hunter-gatherer to Chariot Era",
    tagline:
      "One of the densest concentrations of rock paintings in a single accessible trail in MP. A living open-air gallery.",
    images: [docCave11, docCave12],
    lat: 22.4800,
    lng: 78.4100,
    sections: [
      {
        heading: "Location & Context",
        body: "Located near the Gandhi Sagar Sanctuary in Mandsaur District. The site stretches along a narrow ravine (Nala) for nearly 5 kilometers.",
      },
      {
        heading: "History",
        body: "Discovered in 1977 by Ramesh Kumar Pancholi. This site is massive; it contains thousands of individual figures, making it one of the largest rock art galleries in the world by volume.",
      },
      {
        heading: "Art Style & Form",
        body: "Famous for its Dynamic Action scenes. The warriors are shown with intricate headgears and bows. It features a unique transition from the hunter-gatherer style to the Chariot Era, showing early wheeled transport which is absent in older caves.",
      },
      {
        heading: "Importance",
        body: "It is the best site to study the Technological Evolution of ancient India. You can literally walk the trail and see the weapons change from stone-tipped spears to metal swords and chariots.",
      },
      {
        heading: "Conservation",
        body: "Its sheer length makes it impossible to fence off. It is currently being documented by the Rock Art Society of India (RASI) to create a digital map before natural weathering erodes the cliff faces.",
      },
    ],
  },
  {
    id: "nagori",
    name: "Nagori Rock Shelters",
    region: "Opposite Sanchi Stupa (Hill 1)",
    era: "Proto-iconographic phase",
    tagline:
      "A rare bridge between prehistoric geometric imagery and later sacred iconography centered around a monumental Naga motif.",
    images: [docCave13, docCave14],
    lat: 23.4560,
    lng: 77.7390,
    sections: [
      {
        heading: "Location & Context",
        body: "Located on a small hillock exactly opposite the Sanchi Stupa (Hill 1).",
      },
      {
        heading: "History",
        body: "Surveyed as part of the Sanchi Environs project. These shelters were inhabited by the same artisan communities that likely helped build the stone railings and gateways of the Sanchi Stupa.",
      },
      {
        heading: "Art Style & Form",
        body: "The defining feature is the Anthropomorphic Naga. The figure has a human torso but a serpentine lower body and a multi-hooded cobra canopy. The style is Proto-Iconographic - it is the bridge between a shamanic drawing and a temple idol.",
      },
      {
        heading: "Importance",
        body: "It proves that Sanchi was a sacred landscape long before the Buddhists arrived. It shows that the local Naga-cult (serpent worship) was integrated into early Buddhist and Hindu thought.",
      },
      {
        heading: "Conservation",
        body: "Critical. Unlike Sanchi, Nagori has no permanent guards or ticketing. It is frequently used by locals for grazing, and the Naga mural is at high risk of being lost to smoke and soot from small fires lit inside the shelter.",
      },
    ],
  },
];
