/*
 * Forge documentaire — page catalogue DownloadYourOS.
 * Composition neo-industrielle éditoriale : rail de repérage, hiérarchie par couches,
 * Forge Lime réservé aux actions vérifiables et liens officiels.
 */

import { Fragment, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Command,
  Cpu,
  Download,
  ExternalLink,
  Globe2,
  HardDriveDownload,
  Menu,
  RefreshCw,
  Search,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import { toast } from "sonner";

const heroArt = "/manus-storage/downloadyouros-hero-archive_1593e8c0.jpg";
const catalogArt = "/manus-storage/downloadyouros-catalog-art_2f39b2e6.jpg";
const logoMark = "/manus-storage/downloadyouros-forge-mark_0e6fb3d2.png";
const signalPattern = "/manus-storage/downloadyouros-signal-pattern_689b407b.png";

type OsEntry = {
  name: string;
  slug: string;
  family: string;
  tone: "lime" | "blue" | "amber" | "rose";
  summary: string;
  channel: string;
  architecture: string;
  media: string;
  officialUrl: string;
  tags: string[];
  featured?: boolean;
};

const operatingSystems: OsEntry[] = [
  {
    name: "Windows 11",
    slug: "01",
    family: "Desktop",
    tone: "blue",
    summary: "L’environnement desktop de Microsoft pour les machines récentes.",
    channel: "Stable channel",
    architecture: "x64 · ARM64",
    media: "ISO officiel",
    officialUrl: "https://www.microsoft.com/software-download/windows11",
    tags: ["Bureau", "UEFI", "Microsoft"],
    featured: true,
  },
  {
    name: "Ubuntu Desktop",
    slug: "02",
    family: "Linux",
    tone: "amber",
    summary: "Une distribution accessible pour le développement, le bureau et le cloud.",
    channel: "LTS track",
    architecture: "x64 · ARM64",
    media: "ISO officiel",
    officialUrl: "https://ubuntu.com/download/desktop",
    tags: ["Linux", "LTS", "Open source"],
  },
  {
    name: "Fedora Workstation",
    slug: "03",
    family: "Linux",
    tone: "blue",
    summary: "Un poste de travail moderne pour développeurs et créateurs techniques.",
    channel: "Stable channel",
    architecture: "x86_64 · ARM64",
    media: "Image officielle",
    officialUrl: "https://fedoraproject.org/workstation/download",
    tags: ["Linux", "GNOME", "Développeur"],
  },
  {
    name: "Debian",
    slug: "04",
    family: "Linux",
    tone: "rose",
    summary: "La base stable et polyvalente pour les postes, serveurs et systèmes embarqués.",
    channel: "Stable release",
    architecture: "amd64 · arm64",
    media: "Images officielles",
    officialUrl: "https://www.debian.org/distrib/",
    tags: ["Linux", "Serveur", "Stable"],
  },
  {
    name: "Linux Mint",
    slug: "05",
    family: "Linux",
    tone: "lime",
    summary: "Un bureau Linux familier, léger et simple à prendre en main.",
    channel: "Stable release",
    architecture: "64-bit",
    media: "ISO officiel",
    officialUrl: "https://www.linuxmint.com/download.php",
    tags: ["Linux", "Bureau", "Débutant"],
  },
  {
    name: "Arch Linux",
    slug: "06",
    family: "Linux",
    tone: "blue",
    summary: "Une base minimaliste et personnalisable pour construire son environnement.",
    channel: "Rolling release",
    architecture: "x86_64",
    media: "Image officielle",
    officialUrl: "https://archlinux.org/download/",
    tags: ["Linux", "Rolling", "Avancé"],
  },
  {
    name: "openSUSE",
    slug: "07",
    family: "Linux",
    tone: "lime",
    summary: "Des environnements fiables, de la station de travail au serveur.",
    channel: "Leap · Tumbleweed",
    architecture: "x86_64 · ARM64",
    media: "Images officielles",
    officialUrl: "https://get.opensuse.org/",
    tags: ["Linux", "Serveur", "SUSE"],
  },
  {
    name: "FreeBSD",
    slug: "08",
    family: "Unix",
    tone: "amber",
    summary: "Un système Unix robuste pour les infrastructures, réseaux et appliances.",
    channel: "Release channel",
    architecture: "amd64 · arm64",
    media: "Images officielles",
    officialUrl: "https://www.freebsd.org/where/",
    tags: ["Unix", "Infrastructure", "Réseau"],
  },
  {
    name: "ChromeOS Flex",
    slug: "09",
    family: "Cloud",
    tone: "blue",
    summary: "Un environnement léger pour redonner vie à des ordinateurs compatibles.",
    channel: "Stable channel",
    architecture: "x86_64",
    media: "Installateur officiel",
    officialUrl: "https://chromeenterprise.google/os/chromeosflex/",
    tags: ["Cloud", "Léger", "Google"],
  },
  {
    name: "ReactOS",
    slug: "10",
    family: "Open source",
    tone: "rose",
    summary: "Un système open source compatible avec de nombreux logiciels Windows.",
    channel: "Release channel",
    architecture: "x86 · x64",
    media: "ISO officiel",
    officialUrl: "https://reactos.org/download/",
    tags: ["Open source", "Expérimental", "Windows"],
  },
];

const families = ["Tous", "Desktop", "Linux", "Unix", "Cloud", "Open source"];

function ToneMark({ tone }: { tone: OsEntry["tone"] }) {
  return <span className={`tone-mark tone-${tone}`} aria-hidden="true" />;
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top" aria-label="DownloadYourOS, accueil">
      <span className="brand-mark-wrap">
        <img src={logoMark} alt="" className="brand-mark" />
      </span>
      <span className="brand-wordmark">
        DownloadYour<span>OS</span>
      </span>
    </a>
  );
}

function OsCard({ entry, index }: { entry: OsEntry; index: number }) {
  return (
    <article className={`os-card os-card-${entry.tone} ${entry.featured ? "os-card-featured" : ""}`} style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}>
      <div className="os-card-topline">
        <span className="mono-label">{entry.slug} / {entry.family}</span>
        {entry.featured ? <span className="featured-label"><CheckCircle2 size={13} /> Repère populaire</span> : <span className="status-dot" aria-label="Source cataloguée" />}
      </div>
      <div className="os-card-heading">
        <ToneMark tone={entry.tone} />
        <h3>{entry.name}</h3>
        <ArrowUpRight className="os-arrow" size={19} aria-hidden="true" />
      </div>
      <p className="os-summary">{entry.summary}</p>
      <div className="os-meta-grid">
        <div><span>Canal</span><strong>{entry.channel}</strong></div>
        <div><span>Architecture</span><strong>{entry.architecture}</strong></div>
        <div><span>Média</span><strong>{entry.media}</strong></div>
      </div>
      <div className="os-card-bottom">
        <div className="tag-row">
          {entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <a className="download-link" href={entry.officialUrl} target="_blank" rel="noreferrer">
          Source officielle <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFamily, setActiveFamily] = useState("Tous");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredSystems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return operatingSystems.filter((entry) => {
      const matchesFamily = activeFamily === "Tous" || entry.family === activeFamily;
      const matchesQuery = !normalizedQuery || `${entry.name} ${entry.family} ${entry.tags.join(" ")}`.toLowerCase().includes(normalizedQuery);
      return matchesFamily && matchesQuery;
    });
  }, [activeFamily, query]);

  const handleComingSoon = () => toast("La synchronisation automatique sera activée avec le workflow GitHub Actions.");

  return (
    <div className="site-shell" id="top">
      <div className="grain-overlay" aria-hidden="true" />
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`} aria-label="Navigation principale">
            <a href="#catalogue" onClick={() => setMenuOpen(false)}>Catalogue</a>
            <a href="#verification" onClick={() => setMenuOpen(false)}>Vérification</a>
            <a href="#guide" onClick={() => setMenuOpen(false)}>Guide d’installation</a>
          </nav>
          <div className="header-actions">
            <button className="sync-chip" onClick={handleComingSoon} type="button">
              <span className="sync-led" />
              <span>Sync prévue</span>
              <RefreshCw size={14} />
            </button>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Index d’images système <span className="eyebrow-count">/ 2026.08</span></div>
            <h1 id="hero-title">Trouvez le bon<br /><em>point de départ.</em></h1>
            <p className="hero-lede">DownloadYourOS rassemble les pages officielles des systèmes d’exploitation d’ordinateur, dans un catalogue clair, vérifiable et pensé pour passer de la recherche à la clé USB.</p>
            <div className="hero-cta-row">
              <a className="button button-primary" href="#catalogue">Explorer le catalogue <ChevronRight size={17} /></a>
              <a className="text-link" href="#verification">Pourquoi vérifier les sources ? <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-facts" aria-label="Faits clés">
              <div><strong>10</strong><span>familles indexées</span></div>
              <div><strong>100%</strong><span>liens officiels</span></div>
              <div><strong>0</strong><span>fichier hébergé ici</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration d’archive et de vérification">
            <div className="hero-image-wrap">
              <img src={heroArt} alt="Archive technique d’images système et ligne de vérification" />
              <div className="hero-image-overlay" />
              <div className="hero-stamp"><img src={logoMark} alt="" className="forge-mini-mark" /><ShieldCheck size={18} /><span>Source<br /><b>validée</b></span></div>
              <div className="hero-coordinates mono-label">48° 51′ 24″ N<br />02° 21′ 07″ E</div>
              <div className="hero-scan-line" />
            </div>
            <div className="hero-visual-caption"><span>Archive 001</span><span>Integrity / Ready</span></div>
          </div>
          <div className="vertical-index mono-label" aria-hidden="true">DYO / 001 — 010</div>
        </section>

        <section className="trust-strip" id="verification" aria-labelledby="trust-title">
          <div className="section-rail mono-label" aria-hidden="true"><span>TRUST / 01</span></div>
          <div className="trust-intro">
            <span className="section-kicker">01 / MÉTHODE</span>
            <h2 id="trust-title">Télécharger ne suffit pas.<br /><span>Il faut savoir d’où.</span></h2>
          </div>
          <div className="trust-grid">
            <div className="trust-item"><div className="trust-icon"><Globe2 size={19} /></div><div><h3>Source officielle</h3><p>Chaque action renvoie vers l’éditeur ou le projet qui publie l’image.</p></div></div>
            <div className="trust-item"><div className="trust-icon"><ShieldCheck size={19} /></div><div><h3>Intégrité lisible</h3><p>Les sommes SHA-256 et signatures doivent être vérifiées après téléchargement.</p></div></div>
            <div className="trust-item"><div className="trust-icon"><HardDriveDownload size={19} /></div><div><h3>Installation séparée</h3><p>Le site guide votre choix ; la création de clé USB se fait avec votre outil.</p></div></div>
          </div>
        </section>

        <section className="catalogue-section" id="catalogue" aria-labelledby="catalogue-title">
          <div className="section-rail mono-label" aria-hidden="true"><span>INDEX / 02</span></div>
          <div className="catalogue-heading">
            <div><span className="section-kicker">02 / CATALOGUE</span><h2 id="catalogue-title">Les systèmes,<br /><span>sans le bruit.</span></h2></div>
            <div className="catalogue-note"><span className="note-mark">↳</span><p>Les versions changent. Les liens officiels restent la source de vérité.</p></div>
          </div>
          <div className="catalogue-toolbar">
            <div className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un système…" aria-label="Rechercher un système" /><span className="shortcut"><Command size={12} /> K</span></div>
            <div className="filter-row" aria-label="Filtrer par famille">
              {families.map((family) => <button key={family} type="button" className={`filter-button ${activeFamily === family ? "active" : ""}`} onClick={() => setActiveFamily(family)}>{family}</button>)}
            </div>
          </div>
          <div className="catalogue-layout">
            <aside className="catalogue-aside">
              <div className="aside-art"><img src={catalogArt} alt="Objets techniques représentant des images système" /><span className="aside-art-label mono-label">Media / 03</span></div>
              <div className="catalogue-count"><strong>{String(filteredSystems.length).padStart(2, "0")}</strong><span>résultats<br />disponibles</span></div>
              <p className="aside-copy">Un index de départ pour les machines de bureau, les postes de développement et les infrastructures personnelles.</p>
              <a className="aside-link" href="#guide">Lire le guide de préparation <ArrowUpRight size={14} /></a>
            </aside>
            <div className="os-grid">
              {filteredSystems.length ? filteredSystems.map((entry, index) => (
                <Fragment key={entry.name}>
                  <OsCard entry={entry} index={index} />
                  {index === 3 && <div className="compatibility-band"><span className="forge-chevron-mark" aria-hidden="true"><i /><i /><i /></span><div><span className="mono-label">Compatibilité / repère transversal</span><p>Avant de choisir une image, confirmez l’architecture de votre machine et le mode de démarrage pris en charge.</p></div><span className="compatibility-code mono-label">BIOS · UEFI<br />x64 · ARM64</span></div>}
                </Fragment>
              )) : <div className="empty-state"><Search size={22} /><h3>Aucun système trouvé</h3><p>Essayez un autre terme ou revenez à la famille « Tous ».</p><button className="button button-secondary" onClick={() => { setQuery(""); setActiveFamily("Tous"); }} type="button">Réinitialiser</button></div>}
            </div>
          </div>
        </section>

        <section className="guide-section" id="guide" aria-labelledby="guide-title">
          <div className="section-rail mono-label" aria-hidden="true"><span>FLOW / 03</span></div>
          <div className="guide-pattern" style={{ backgroundImage: `url(${signalPattern})` }} aria-hidden="true" />
          <div className="guide-content">
            <div className="guide-index mono-label">03 / WORKFLOW</div>
            <div className="guide-main"><span className="section-kicker">AVANT LE PREMIER REBOOT</span><h2 id="guide-title">Un chemin court,<br /><span>une machine prête.</span></h2><p>DownloadYourOS ne prétend pas installer un système depuis une page web. Il vous aide à trouver la bonne image, à vérifier son intégrité puis à préparer un support d’installation avec l’outil recommandé par l’éditeur.</p><a className="button button-primary" href="#steps">Voir les étapes <ChevronRight size={17} /></a></div>
            <div className="guide-steps" id="steps">
              <div className="guide-step"><span>01</span><div><h3>Choisir</h3><p>Comparez la famille, l’architecture et le canal de publication.</p></div></div>
              <div className="guide-step"><span>02</span><div><h3>Vérifier</h3><p>Contrôlez la signature ou le SHA-256 annoncé par la source officielle.</p></div></div>
              <div className="guide-step"><span>03</span><div><h3>Préparer</h3><p>Créez votre support avec l’outil conseillé, puis suivez le guide du projet.</p></div></div>
            </div>
          </div>
        </section>

        <section className="sync-section" aria-labelledby="sync-title">
          <div className="section-rail mono-label" aria-hidden="true"><span>SYNC / 04</span></div>
          <div className="sync-orbit"><RefreshCw size={29} /></div>
          <div><span className="section-kicker">PROCHAINE ÉTAPE</span><h2 id="sync-title">Un catalogue qui reste<br /><span>au même rythme que les projets.</span></h2></div>
          <div className="sync-copy"><p>La version GitHub Pages démarre avec un index éditorial. Le workflow de synchronisation automatisée pourra ensuite contrôler les sources publiques, comparer les métadonnées et proposer une mise à jour du catalogue.</p><button className="text-link" type="button" onClick={handleComingSoon}>Comprendre la synchronisation <ArrowUpRight size={15} /></button></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><BrandMark compact /><p>Des systèmes officiels.<br />Des repères clairs.</p><div className="footer-links"><a href="#catalogue">Catalogue</a><a href="#verification">Vérification</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a></div></div>
        <div className="footer-bottom"><span>© 2026 DownloadYourOS</span><span className="footer-status"><span className="sync-led" /> Interface statique · liens externes officiels</span><span>Conçu pour choisir avec discernement.</span></div>
      </footer>
    </div>
  );
}
