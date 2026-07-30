interface TradeOff {
  decision: string;
  productBenefit: string;
  techTradeOff: string;
}

interface CaseStudyProps {
  index: number;
  title: string;
  subtitle: string;
  badgeText: string;
  badgeVariant: "green" | "blue";
  challenge?: string;
  solution?: string;
  tradeOffs?: TradeOff[];
  description?: string;
  bulletPoints?: string[];
}

export function CaseStudyCard({
  index,
  title,
  subtitle,
  badgeText,
  badgeVariant,
  challenge,
  solution,
  tradeOffs,
  description,
  bulletPoints,
}: CaseStudyProps) {
  const badgeClasses =
    badgeVariant === "green"
      ? "bg-accent/10 text-accent border-accent/30"
      : "bg-primary/10 text-primary border-primary/30";

  const padIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="tick card-hover bg-card border border-border rounded-sm p-8 shadow-sm hover:border-primary hover:shadow-md">
      {/* Panel header: index + title + metadata strip + badge */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div className="min-w-0">
          <div className="mono-label text-primary/70 mb-2">
            {padIndex} <span className="text-border">/</span> CASE STUDY
          </div>
          <h3 className="text-2xl font-bold text-card-foreground tracking-tight">
            {title}
          </h3>
        </div>
        <div
          className={`mono-label shrink-0 px-3 py-1.5 rounded-sm border ${badgeClasses}`}
        >
          {badgeText}
        </div>
      </div>

      {/* Metadata strip: company · dates */}
      <div className="mono-label text-muted-foreground/80 pb-4 mb-6 border-b border-dashed border-border">
        {subtitle}
      </div>

      {challenge && solution && (
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-2 mb-6">
          <div className="bg-background border border-border rounded-sm p-4">
            <div className="mono-label text-muted-foreground/70 mb-2">
              ▸ Challenge
            </div>
            <p className="text-sm text-secondary-foreground italic leading-relaxed">
              {challenge}
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <span className="font-mono text-primary text-xl">→</span>
          </div>
          <div className="bg-background border border-border rounded-sm p-4">
            <div className="mono-label text-primary/80 mb-2">▸ Solution</div>
            <p
              className="text-sm text-secondary-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: solution }}
            />
          </div>
        </div>
      )}

      {tradeOffs && tradeOffs.length > 0 && (
        <div className="mb-6">
          <div className="mono-label text-muted-foreground/80 mb-3">
            § Trade-off Ledger
          </div>
          <div className="space-y-2">
            {tradeOffs.map((tradeOff, i) => (
              <div
                key={tradeOff.decision}
                className="bg-background border border-border rounded-sm overflow-hidden"
              >
                <div className="mono-label text-xs text-foreground bg-muted/40 px-3 py-1.5 border-b border-border">
                  {String(i + 1).padStart(2, "0")} · {tradeOff.decision}
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="px-3 py-2">
                    <div className="mono-label text-accent/90 mb-1 text-[10px]">
                      ▲ Benefit
                    </div>
                    <p className="text-xs text-secondary-foreground">
                      {tradeOff.productBenefit}
                    </p>
                  </div>
                  <div className="px-3 py-2">
                    <div className="mono-label text-muted-foreground/80 mb-1 text-[10px]">
                      ▼ Cost
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {tradeOff.techTradeOff}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {description && (
        <div className="space-y-3 text-secondary-foreground border-t border-dashed border-border pt-4">
          <p
            className="text-sm leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="space-y-1.5">
              {bulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="font-mono text-primary/70 shrink-0">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
