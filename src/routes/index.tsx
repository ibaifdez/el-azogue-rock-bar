import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, UtensilsCrossed, Instagram, Flame, Trophy } from "lucide-react";
import { carta, INSTAGRAM, MAPS, merch } from "@/lib/carta";
import { SectionTitle } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Azogue Rock · Beers & Burgers en Vitoria-Gasteiz" },
      { name: "description", content: "Burgers con nombre de banda, cerveza fría y la puta buena música. Bar rockero en Vitoria-Gasteiz." },
      { property: "og:title", content: "El Azogue Rock · Beers & Burgers" },
      { property: "og:description", content: "Burgers con nombre de banda, cerveza y rock en Vitoria-Gasteiz." },
    ],
  }),
  component: Index,
});

function Index() {
  const destacadas = carta[0]!.platos.slice(0, 6);
  const heroImg = carta[0]!.platos[1]!.img;
  return (
    <>
      <section className="relative isolate overflow-hidden px-4 pb-12 pt-16 text-center md:pt-28">
        <img src={heroImg} alt="Burger 2 Alpargatas, campeona de Álava 2023" className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/65 via-background/50 to-background" />
        <h1 className="font-display text-6xl leading-none text-chrome animate-in fade-in zoom-in-95 duration-700 md:text-8xl">El Azogue<span className="block text-primary">Rock</span></h1>
        <p className="mx-auto mt-4 max-w-md font-heading text-lg uppercase tracking-widest text-muted-foreground">
          Beers · Burgers · <span className="text-primary">Rock</span>
        </p>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">No puedo dejar el rock. Ni las burgers.</p>
        <div className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
          <Link to="/carta" className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-heading text-lg uppercase tracking-wider text-primary-foreground glow-red transition-transform active:scale-95">
            <UtensilsCrossed className="h-5 w-5" /> Ver la carta
          </Link>
          <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-4 font-heading text-lg uppercase tracking-wider text-accent transition-transform active:scale-95">
            <MapPin className="h-5 w-5" /> Cómo llegar
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionTitle kicker="Las que más suenan">Burgers top</SectionTitle>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {destacadas.map((p) => (
            <Link key={p.banda} to="/carta" hash={slug(p.banda)} className="group w-[78%] shrink-0 snap-center overflow-hidden rounded-md border border-border bg-card md:w-auto">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={`Burger ${p.banda}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && <span className="absolute left-2 top-2 rounded-sm bg-primary px-2 py-1 font-heading text-xs uppercase text-primary-foreground">{p.tag}</span>}
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <h3 className="truncate font-heading text-xl uppercase">{p.banda}</h3>
                <span className="shrink-0 font-heading text-xl text-primary">{p.precio} €</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-3">
        <Feature icon={Trophy} title="Campeona de Álava 2023" text="Nuestra 2 Alpargatas se llevó el título. Ven a probarla." />
        <Feature icon={Flame} title="Para valientes" text="Salsa Marea Fuego, alitas Aerosmith… si pica, pica." />
        <Feature icon={UtensilsCrossed} title="Sin gluten" text="Cualquier burger con nuestro pan sin gluten." />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionTitle kicker="Llévate el rock a casa">Merchandising</SectionTitle>
        <div className="grid grid-cols-3 gap-3">
          {merch.map((m) => (
            <div key={m.nombre} className="rounded-md border border-border bg-card p-4 text-center">
              <p className="font-heading uppercase tracking-wider">{m.nombre}</p>
              <p className="font-display text-3xl text-primary">{m.precio}€</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">Pídelo en barra.</p>
      </section>

      <section className="px-4 py-12 text-center">
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-heading text-lg uppercase tracking-wider text-accent hover:text-primary">
          <Instagram className="h-6 w-6" /> @el_azogue_rock
        </a>
      </section>
    </>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof Flame; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-md border border-border bg-card p-5">
      <Icon className="h-8 w-8 shrink-0 text-primary" />
      <div>
        <h3 className="font-heading text-lg uppercase">{title}</h3>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function slug(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");
}
