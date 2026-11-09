import { Link } from "@tanstack/react-router";
import { Home, UtensilsCrossed, MapPin, Instagram } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.jpg.asset.json";
import { INSTAGRAM } from "@/lib/carta";

const nav = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/carta", label: "Carta", icon: UtensilsCrossed },
  { to: "/visitanos", label: "Visítanos", icon: MapPin },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <img src={logo.url} alt="El Azogue Rock" className="h-10 w-10 shrink-0 rounded-sm object-cover md:h-12 md:w-12" />
            <span className="truncate font-display text-xl text-chrome md:text-2xl">El Azogue Rock</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="font-heading text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </nav>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 text-muted-foreground md:hidden">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg text-chrome">El Azogue Rock</p>
        <p>Beers & Burgers · Vitoria-Gasteiz</p>
      </footer>

      {/* Barra inferior móvil */}
      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: true }}
            className="flex flex-col items-center gap-1 py-2.5 font-heading text-xs uppercase tracking-wider text-muted-foreground"
            activeProps={{ className: "text-primary" }}
          >
            <n.icon className="h-6 w-6" />
            {n.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function SectionTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mb-6 text-center">
      {kicker && <p className="font-heading text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p>}
      <h2 className="font-display text-4xl text-chrome md:text-5xl">{children}</h2>
    </div>
  );
}
