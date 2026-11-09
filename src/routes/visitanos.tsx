import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Instagram } from "lucide-react";
import { INSTAGRAM, MAPS, MAP_EMBED, normas } from "@/lib/carta";
import { SectionTitle } from "@/components/SiteShell";

export const Route = createFileRoute("/visitanos")({
  head: () => ({
    meta: [
      { title: "Visítanos · El Azogue Rock" },
      { name: "description", content: "Dónde está El Azogue Rock en Vitoria-Gasteiz y cómo funciona el bar." },
      { property: "og:title", content: "Visita El Azogue Rock" },
      { property: "og:description", content: "Ubicación y normas del bar rockero de Vitoria-Gasteiz." },
    ],
  }),
  component: Visitanos,
});

function Visitanos() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <SectionTitle kicker="Vitoria-Gasteiz">Dónde estamos</SectionTitle>
      <div className="overflow-hidden rounded-md border border-border">
        <iframe title="Mapa El Azogue Rock" src={MAP_EMBED} className="h-72 w-full md:h-96" loading="lazy" />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-heading text-lg uppercase tracking-wider text-primary-foreground glow-red">
          <MapPin className="h-5 w-5" /> Abrir en Google Maps
        </a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-md border border-accent px-6 py-4 font-heading text-lg uppercase tracking-wider text-accent">
          <Instagram className="h-5 w-5" /> Síguenos
        </a>
      </div>

      <div className="mt-14">
        <SectionTitle kicker="Léelas, coño">Instrucciones del bar</SectionTitle>
        <ol className="space-y-3">
          {normas.map((n, i) => (
            <li key={i} className="flex gap-4 rounded-md border border-border bg-card p-4">
              <span className="font-display text-3xl leading-none text-primary">{i + 1}</span>
              <p className="pt-1">{n}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center font-heading uppercase leading-relaxed tracking-wide text-muted-foreground">
          Y ahora sí, el puto personal del puto Azogue Rock os anima a disfrutar de una puta velada agradable, de la puta buena música y de la puta buena comida. <span className="text-primary">Putísimas gracias.</span>
        </p>
      </div>
    </div>
  );
}
