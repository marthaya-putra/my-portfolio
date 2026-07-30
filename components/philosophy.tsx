const principles = [
  {
    number: "01",
    title: "Product First:",
    description:
      "If a feature doesn't move the needle, the code is a liability.",
  },
  {
    number: "02",
    title: "Observability:",
    description: "If you can't measure it, you haven't finished the feature.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="tick mt-24 bg-foreground text-background rounded-sm p-8 md:p-10"
    >
      <div className="mono-label text-primary mb-4">
        § Principles · Engineering Spec
      </div>

      {/* Callout quote */}
      <blockquote className="border-l-2 border-primary pl-5 mb-8">
        <p className="text-2xl md:text-3xl font-bold italic text-primary leading-snug">
          {"“Build for the users, not the resume.”"}
        </p>
      </blockquote>

      <div className="grid md:grid-cols-2 gap-8">
        <p className="text-background/70 leading-relaxed border-t border-background/20 pt-4">
          {
            "I believe that technical debt is often a business decision, not just a coding one. My approach focuses on "
          }
          <strong className="text-background">Maintainable Pragmatism</strong>
          {
            ", building what we need today while architecting for tomorrow's scale."
          }
        </p>
        <div className="space-y-3">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="flex gap-4 border border-background/20 rounded-sm p-3"
            >
              <span className="mono-label text-primary shrink-0">
                § {principle.number}
              </span>
              <p className="text-background/90">
                <strong className="text-background">
                  {principle.title}
                </strong>{" "}
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
