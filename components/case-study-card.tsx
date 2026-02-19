interface TradeOff {
  decision: string
  productBenefit: string
  techTradeOff: string
}

interface CaseStudyProps {
  title: string
  subtitle: string
  badgeText: string
  badgeVariant: "green" | "blue"
  challenge?: string
  solution?: string
  tradeOffs?: TradeOff[]
  description?: string
  bulletPoints?: string[]
}

export function CaseStudyCard({
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
      ? "bg-accent/10 text-accent"
      : "bg-primary/10 text-primary"

  return (
    <article className="bg-card border border-border rounded-2xl p-8 transition-all shadow-sm hover:border-primary">
      <div className="flex flex-wrap justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-card-foreground">
            {title}
          </h3>
          <p className="text-primary font-medium">{subtitle}</p>
        </div>
        <div
          className={`${badgeClasses} px-4 py-2 rounded-lg text-sm font-bold mt-2 sm:mt-0`}
        >
          {badgeText}
        </div>
      </div>

      {challenge && solution && (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-widest mb-2">
              The Challenge
            </h4>
            <p className="text-secondary-foreground italic">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-widest mb-2">
              The Solution
            </h4>
            <p
              className="text-secondary-foreground"
              dangerouslySetInnerHTML={{ __html: solution }}
            />
          </div>
        </div>
      )}

      {tradeOffs && tradeOffs.length > 0 && (
        <div className="bg-background rounded-xl p-6 mb-8 border border-border">
          <h4 className="font-semibold mb-4 text-sm text-foreground">
            Technical Trade-off Matrix
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-muted-foreground border-b border-border">
                  <th className="pb-2 font-medium">Decision</th>
                  <th className="pb-2 font-medium">Product Benefit</th>
                  <th className="pb-2 font-medium">Tech Trade-off</th>
                </tr>
              </thead>
              <tbody className="text-secondary-foreground">
                {tradeOffs.map((tradeOff, index) => (
                  <tr
                    key={tradeOff.decision}
                    className={index > 0 ? "border-t border-border/50" : ""}
                  >
                    <td className="py-3 font-semibold">{tradeOff.decision}</td>
                    <td className="py-3 italic">{tradeOff.productBenefit}</td>
                    <td className="py-3">{tradeOff.techTradeOff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {description && (
        <div className="space-y-4 text-secondary-foreground">
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="list-disc ml-5 space-y-2 opacity-80">
              {bulletPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      )}

    </article>
  )
}
