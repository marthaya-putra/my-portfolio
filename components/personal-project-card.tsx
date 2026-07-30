import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  index: number;
  children: ReactNode;
}

export function SectionHeader({ index, children }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 border-b-2 border-foreground pb-3">
      <span className="mono-label text-primary">
        § {String(index).padStart(2, "0")}
      </span>
      <h2 className="text-3xl font-black tracking-tighter uppercase">
        {children}
      </h2>
    </div>
  );
}

interface Feature {
  title: string;
  description: string;
  color: "primary" | "accent" | "destructive";
}

interface Badge {
  text: string;
  variant: "primary" | "muted";
}

interface PersonalProjectProps {
  title: string;
  badges: Badge[];
  description: string;
  features: Feature[];
  githubUrl: string;
  diagram: React.ReactNode;
}

const badgeClasses = {
  primary: "bg-primary/10 text-primary border-primary/30",
  muted: "bg-muted text-muted-foreground border border-border",
};

const barClasses = {
  primary: "bg-primary",
  accent: "bg-accent",
  destructive: "bg-destructive",
};

/* Shared schematic node + bus primitives.
   Rasterization-safe: borders, solid fills, box-shadow only. */

function Node({
  label,
  sub,
  tone = "default",
}: {
  label: string;
  sub?: string;
  tone?: "default" | "primary" | "accent";
}) {
  const toneClass =
    tone === "primary"
      ? "bg-primary/5 border-primary/30"
      : tone === "accent"
        ? "bg-accent/5 border-accent/30"
        : "bg-card border-border";
  const subTone =
    tone === "primary"
      ? "text-primary"
      : tone === "accent"
        ? "text-accent"
        : "text-muted-foreground";
  return (
    <div
      className={`relative border rounded-sm px-3 py-2 text-center shadow-sm ${toneClass}`}
    >
      <div className="mono-label text-[10px] mb-0.5">{label}</div>
      {sub && (
        <div className={`font-mono text-[9px] uppercase leading-tight ${subTone}`}>
          {sub}
        </div>
      )}
    </div>
  );
}

function Bus({ label }: { label: string }) {
  return (
    <div className="w-full flex justify-center py-1.5 relative">
      <div className="mono-label px-3 py-1 bg-foreground text-background rounded-sm z-10 text-[10px]">
        {label}
      </div>
      <div className="absolute w-full h-px bg-border top-1/2" />
    </div>
  );
}

function FlowConnector({ vertical = true }: { vertical?: boolean }) {
  return vertical ? (
    <div className="w-px h-5 bg-border mx-auto" />
  ) : (
    <div className="h-px w-full bg-border" />
  );
}

export function FittedInDiagram() {
  return (
    <div className="tick bg-card border-2 border-border rounded-sm overflow-hidden shadow-lg">
      {/* Window chrome */}
      <div className="bg-foreground px-4 py-2.5 flex justify-between items-center">
        <span className="mono-label text-primary text-[10px]">
          ▣ Schematic · Fitted_In/Pipeline
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent/60" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/60" />
        </div>
      </div>

      <div className="p-5 md:p-7 bg-background blueprint-grid relative space-y-3">
        <div className="mono-label text-muted-foreground/60 text-[10px]">
          Fig. 01 — Parallel Agent Synthesis
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <Node label="Master Resume" tone="default" />
          <Node label="LinkedIn Scrape" tone="primary" />
        </div>

        <FlowConnector />

        {/* Fan-out bus */}
        <Bus label="▶ Fan-Out Orchestration" />

        {/* Parallel agents */}
        <div className="grid grid-cols-3 gap-2">
          <Node label="Profile Agent" sub="MD_HOOK_GEN" tone="primary" />
          <Node label="Exp Agent" sub="BULLET_ALIGN" tone="primary" />
          <Node label="Skills Agent" sub="ATS_FILTER_GEN" tone="accent" />
        </div>

        <FlowConnector />

        {/* Fan-in bus */}
        <Bus label="◀ Fan-In Streaming" />

        {/* Output */}
        <div className="space-y-2">
          <div className="h-9 rounded-sm border border-border bg-muted/40 flex items-center px-3 justify-between">
            <span className="font-mono text-[10px] text-primary font-bold">
              STREAMING_MARKDOWN_CHUNKS…
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            </div>
          </div>
          <div className="bg-card border border-border rounded-sm px-3 py-2 flex justify-between items-center shadow-sm">
            <div className="flex flex-col">
              <span className="mono-label text-muted-foreground/70 text-[10px]">
                Final Output
              </span>
              <span className="font-mono text-xs font-bold text-foreground">
                Formatted Workspace
              </span>
            </div>
            <div className="mono-label px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-sm border border-primary/20">
              Copy → Docs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyFlixDiagram() {
  return (
    <div className="tick bg-card border-2 border-border rounded-sm overflow-hidden shadow-lg">
      {/* Window chrome */}
      <div className="bg-foreground px-4 py-2.5 flex justify-between items-center">
        <span className="mono-label text-primary text-[10px]">
          ▣ Schematic · My_Flix/Affinity_Loop
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent/60" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/60" />
        </div>
      </div>

      <div className="p-5 md:p-7 bg-background blueprint-grid relative space-y-3">
        <div className="mono-label text-muted-foreground/60 text-[10px]">
          Fig. 02 — Reciprocal Affinity Feedback Loop
        </div>

        {/* Inputs: like / dislike */}
        <div className="grid grid-cols-2 gap-3">
          <Node label="▲ Like" sub="POSITIVE_SENTIMENT" tone="accent" />
          <Node label="▼ Dislike" sub="NEGATIVE_SENTIMENT" tone="default" />
        </div>

        <FlowConnector />

        {/* Reconciler */}
        <div className="relative bg-card border border-border rounded-sm p-4 shadow-sm">
          <div className="absolute -top-2.5 left-3 mono-label px-2 py-0.5 bg-foreground text-background text-[9px] rounded-sm">
            LOCAL_STATE_RECONCILER
          </div>
          <div className="grid grid-cols-2 gap-4 pt-1">
            <div className="space-y-1">
              <div className="mono-label text-[10px] text-primary border-b border-border pb-1">
                Scoring Engine
              </div>
              <p className="font-mono text-[9px] leading-tight italic text-muted-foreground">
                Weights IDs by sentiment frequency.
              </p>
            </div>
            <div className="space-y-1 border-l pl-4 border-border">
              <div className="mono-label text-[10px] text-primary border-b border-border pb-1">
                Filter Pruning
              </div>
              <p className="font-mono text-[9px] leading-tight italic text-muted-foreground">
                Excludes content matching negative IDs.
              </p>
            </div>
          </div>
        </div>

        {/* Loop-back indicator: the reciprocal loop */}
        <div className="flex items-center gap-2 justify-center">
          <span className="font-mono text-primary text-sm">⟲</span>
          <span className="mono-label text-muted-foreground/70 text-[10px]">
            re-ranks & feeds back into discovery
          </span>
        </div>

        <FlowConnector />

        {/* Output */}
        <div className="bg-foreground text-background mono-label rounded-sm px-4 py-2 text-center text-[10px] shadow-lg">
          Discovery Feed · Re-Ranked
        </div>
      </div>
    </div>
  );
}

export function PersonalProjectCard({
  title,
  badges,
  description,
  features,
  githubUrl,
  diagram,
}: PersonalProjectProps) {
  return (
    <section className="grid lg:grid-cols-5 gap-8 md:gap-10 items-start">
      <div className="lg:col-span-2 space-y-4 md:space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight uppercase leading-none">
            {title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className={`mono-label px-2 py-1 rounded-sm border ${badgeClasses[badge.variant]}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>

        <p
          className="text-muted-foreground leading-relaxed text-sm [&_strong]:text-foreground [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {features.length > 0 && (
          <div className="space-y-3 md:space-y-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div
                  className={`w-1 h-8 md:h-10 ${barClasses[feature.color]} mt-0.5 md:mt-1`}
                />
                <div>
                  <span className="mono-label text-xs text-foreground">
                    {feature.title}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group pressable mono-label text-primary flex items-center gap-2 hover:underline"
          >
            VIEW_CODEBASE{" "}
            <ExternalLink
              className="w-3 h-3 arrow-nudge"
              strokeWidth={3}
            />
          </a>
        </div>
      </div>

      <div className="lg:col-span-3">{diagram}</div>
    </section>
  );
}
