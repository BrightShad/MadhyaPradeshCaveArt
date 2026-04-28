import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-stone-950/85" />
      </div>

      <div className="max-w-5xl w-full rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm md:p-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ochre transition-colors hover:text-ochre/80 mb-12"
        >
          ← Back to Sites
        </Link>
        <h1 className="font-display text-6xl font-extrabold text-bone mb-8">About Us</h1>
        <div className="space-y-8 text-lg text-bone/90 leading-relaxed md:text-xl [text-align:justify]">
          <p>
            The state of Madhya Pradesh inscribed with a hundred thousand year old echo on the rocks of Vindhya and Satpura hills. A living timeline that starts from the primitive hunting scenes of Bhimbetka to the more sophisticated Buddhist paintings of Bagh.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-bone mb-2">Purpose</h2>
              <p>
                This platform seeks to dissociate from a clinical and static barrier that most archives have. We aim to provide a seamless, immersive interface that allows one to gain some knowledge the of these places, understanding the life then, in full depth, atmosphere and human context. Through the fusion of contemporary UX design and historical essence, we harness the digital-first interplay to preserve these stories.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-bone mb-2">The Team</h2>
              <p>
                Ishan Krish Kumar, Pushkar, Akhilesh Gupta and Mukund Raghuraman conceived and built this project. A team of designers and developers at the convergence of technology and Indian culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
