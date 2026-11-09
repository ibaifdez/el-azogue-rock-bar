import { createFileRoute } from "@tanstack/react-router";
import { carta, salsas } from "@/lib/carta";
import { SectionTitle } from "@/components/SiteShell";

const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta · El Azogue Rock" },
      { name: "description", content: "Burgers de buey y wagyu, entrantes, patatas, ensaladas y postres con nombre de banda de rock." },
      { property: "og:title", content: "La carta de El Azogue Rock" },
      { property: "og:description", content: "Burgers, entrantes y postres con nombre de banda de rock." },
    ],
  }),
  component: Carta,
});

function Carta() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="px-4 pt-8">
        <SectionTitle kicker="Del puto Azogue Rock">La Carta</SectionTitle>
      </div>

      {/* Pestañas de sección fijas */}
      <div className="sticky top-14 z-30 border-b border-border bg-background/95 backdrop-blur md:top-16">
        <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
          {[...carta.map((s) => ({ id: s.id, t: s.titulo })), { id: "salsas", t: "Salsas" }].map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border border-border px-4 py-2 font-heading text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
              {s.t}
            </a>
          ))}
        </div>
      </div>

      {carta.map((sec) => (
        <section key={sec.id} id={sec.id} className="scroll-mt-32 px-4 py-8">
          <h2 className="font-display text-4xl text-primary">{sec.titulo}</h2>
          {sec.nota && <p className="mt-1 text-sm text-muted-foreground">{sec.nota}</p>}
          <div className={`mt-5 grid gap-4 ${sec.platos.some((p) => p.img) ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
            {sec.platos.map((p, i) => (
              <article key={p.banda + i} id={sec.id === "burgers" ? slug(p.banda) : undefined} className="scroll-mt-32 overflow-hidden rounded-md border border-border bg-card">
                {p.img && (
                  <div className="relative aspect-[16/10]">
                    <img src={p.img} alt={`${p.banda}`} loading="lazy" className="h-full w-full object-cover" />
                    {p.tag && <span className="absolute left-2 top-2 rounded-sm bg-primary px-2 py-1 font-heading text-xs uppercase text-primary-foreground">{p.tag}</span>}
                  </div>
                )}
                <div className="p-4">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                    <h3 className="font-heading text-xl uppercase leading-tight">{p.banda}</h3>
                    <span className="font-heading text-xl text-primary">{p.precio} €</span>
                  </div>
                  {p.nombre && <p className="font-semibold text-accent">{p.nombre}</p>}
                  {p.desc && <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>}
                  {!p.img && p.tag && <span className="mt-2 inline-block rounded-sm bg-primary px-2 py-0.5 font-heading text-xs uppercase text-primary-foreground">{p.tag}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section id="salsas" className="scroll-mt-32 px-4 py-8">
        <h2 className="font-display text-4xl text-primary">Salsas <span className="font-heading text-xl text-foreground">· 1,00 € extra</span></h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {salsas.map((s) => (
            <span key={s} className="rounded-sm border border-border bg-card px-3 py-2 text-sm">{s}</span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Si tienes alguna alergia o intolerancia, pregúntanos: tenemos la información de alérgenos de cada plato.</p>
      </section>
    </div>
  );
}
