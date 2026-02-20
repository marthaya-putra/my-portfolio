import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="border-b-4 border-foreground pb-4">
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

const colorClasses = {
  primary: { bg: "bg-primary/10", text: "text-primary", bar: "bg-primary" },
  accent: { bg: "bg-accent/10", text: "text-accent", bar: "bg-accent" },
  destructive: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    bar: "bg-destructive",
  },
};

const badgeClasses = {
  primary: "bg-primary/10 text-primary",
  muted: "bg-muted text-muted-foreground border border-border",
};

export function FittedInDiagram() {
  return (
    <div className="bg-card border-2 border-border rounded-3xl overflow-hidden shadow-lg">
      <div className="bg-foreground p-4 flex justify-between items-center">
        <span className="font-mono text-[10px] text-primary uppercase">
          Parallel_Agent_Synthesis_Map
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-muted-foreground" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
      <div className="p-6 md:p-8 bg-background relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="flex flex-col items-center space-y-4 md:space-y-6 relative">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full justify-center">
            <div className="p-2 md:p-3 bg-card border border-border rounded-lg shadow-sm text-center flex-1 max-w-[140px]">
              <div className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase">
                Context A
              </div>
              <div className="text-[10px] md:text-xs font-bold">
                Master Resume
              </div>
            </div>
            <div className="p-2 md:p-3 bg-primary/5 border border-primary/20 rounded-lg shadow-sm text-center flex-1 max-w-[140px]">
              <div className="text-[8px] md:text-[10px] font-bold text-primary uppercase">
                Context B
              </div>
              <div className="text-[10px] md:text-xs font-bold">
                LinkedIn Scrape
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center py-2 relative">
            <div className="px-3 py-1 bg-foreground text-background text-[9px] md:text-[10px] font-black italic rounded z-10">
              FAN-OUT AGENT ORCHESTRATION
            </div>
            <div className="absolute w-full h-px bg-border top-1/2" />
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-3 w-full">
            <div className="p-2 md:p-3 bg-card border border-border rounded-xl text-center shadow-sm">
              <div className="text-[8px] md:text-[10px] font-bold text-primary uppercase">
                Profile Agent
              </div>
              <div className="text-[7px] md:text-[8px] text-muted-foreground mt-1 uppercase leading-tight font-mono">
                MD_HOOK_GEN
              </div>
            </div>
            <div className="p-2 md:p-3 bg-card border border-border rounded-xl text-center shadow-sm">
              <div className="text-[8px] md:text-[10px] font-bold text-primary uppercase">
                Exp Agent
              </div>
              <div className="text-[7px] md:text-[8px] text-muted-foreground mt-1 uppercase leading-tight font-mono">
                BULLET_ALIGN
              </div>
            </div>
            <div className="p-2 md:p-3 bg-card border border-border rounded-xl text-center shadow-sm">
              <div className="text-[8px] md:text-[10px] font-bold text-accent uppercase">
                Skills Agent
              </div>
              <div className="text-[7px] md:text-[8px] text-muted-foreground mt-1 uppercase leading-tight font-mono">
                ATS_FILTER_GEN
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center py-2 relative">
            <div className="px-3 py-1 bg-foreground text-background text-[9px] md:text-[10px] font-black italic rounded z-10">
              FAN-IN STREAMING
            </div>
            <div className="absolute w-full h-px bg-border top-1/2" />
          </div>

          <div className="w-full space-y-2 md:space-y-3">
            <div className="h-8 md:h-10 rounded-lg flex items-center px-3 md:px-4 justify-between border border-border bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-[length:200%_100%] animate-shimmer shadow-inner">
              <span className="font-mono text-[9px] md:text-[10px] text-primary font-bold">
                STREAMING_MARKDOWN_CHUNKS...
              </span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              </div>
            </div>
            <div className="bg-card border border-border p-3 md:p-4 rounded-xl flex justify-between items-center shadow-sm">
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase">
                  Final Output
                </span>
                <span className="text-[10px] md:text-xs font-bold text-foreground">
                  Formatted Workspace View
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-[9px] md:text-[10px] font-black rounded border border-primary/20 uppercase">
                  Copy to G-Docs
                </div>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyFlixDiagram() {
  return (
    <div className="bg-card border-2 border-border rounded-3xl overflow-hidden shadow-lg">
      <div className="bg-foreground p-4 flex justify-between items-center">
        <span className="font-mono text-[10px] text-primary uppercase">
          Affinity_Feedback_Loop_Logic
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-muted" />
          <div className="w-2 h-2 rounded-full bg-muted" />
        </div>
      </div>
      <div className="p-6 md:p-8 bg-background relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="flex flex-col items-center space-y-4 md:space-y-6 relative">
          <div className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center text-accent shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 10.333z" />
                </svg>
              </div>
              <span className="text-[7px] font-black uppercase mt-1">Like</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-destructive/10 border-2 border-destructive rounded-full flex items-center justify-center text-destructive shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-2.266z" />
                </svg>
              </div>
              <span className="text-[7px] font-black uppercase mt-1">
                Dislike
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-border border-l-2 border-dashed" />

          <div className="w-full bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm relative">
            <div className="absolute -top-3 left-4 md:left-6 bg-primary text-background px-2 py-0.5 text-[8px] font-black italic">
              LOCAL_STATE_RECONCILER
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1 md:space-y-2">
                <div className="text-[9px] md:text-[10px] font-black text-primary uppercase border-b border-border pb-1">
                  Scoring Engine
                </div>
                <p className="text-[8px] md:text-[9px] text-muted-foreground font-mono leading-tight italic">
                  Weights IDs based on sentiment frequency.
                </p>
              </div>
              <div className="space-y-1 md:space-y-2 border-l pl-3 md:pl-4 border-border">
                <div className="text-[9px] md:text-[10px] font-black text-primary uppercase border-b border-border pb-1">
                  Filter Pruning
                </div>
                <p className="text-[8px] md:text-[9px] text-muted-foreground font-mono leading-tight italic">
                  Excludes content matching negative IDs.
                </p>
              </div>
            </div>
          </div>

          <div className="h-6 w-px bg-border border-l-2 border-dashed" />

          <div className="bg-foreground text-background px-6 md:px-8 py-2 rounded-full font-mono text-[9px] md:text-[10px] font-bold tracking-widest shadow-lg uppercase border border-border">
            Discovery Feed Re-Ranked
          </div>
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
                className={`px-2 py-0.5 text-[10px] md:text-xs font-bold rounded uppercase ${badgeClasses[badge.variant]}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>

        <p
          className="text-muted-foreground leading-relaxed text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="space-y-3 md:space-y-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <div
                className={`w-1 h-8 md:h-10 ${colorClasses[feature.color].bar} mt-0.5 md:mt-1`}
              />
              <div>
                <span className="text-xs font-bold uppercase text-foreground">
                  {feature.title}
                </span>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-primary flex items-center gap-2 hover:underline"
          >
            VIEW_CODEBASE <ExternalLink className="w-3 h-3" strokeWidth={3} />
          </a>
        </div>
      </div>

      <div className="lg:col-span-3">{diagram}</div>
    </section>
  );
}
