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
      className="mt-24 bg-foreground text-background rounded-3xl p-10"
    >
      <h2 className="text-3xl font-bold mb-6 italic text-primary">
        {'"Build for the users, not the resume."'}
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <p className="text-background/70">
          {
            "I believe that technical debt is often a business decision, not just a coding one. My approach focuses on "
          }
          <strong className="text-background">Maintainable Pragmatism</strong>
          {
            ", building what we need today while architecting for tomorrow's scale."
          }
        </p>
        <div className="space-y-4">
          {principles.map((principle) => (
            <div key={principle.number} className="flex gap-4">
              <span className="text-primary font-mono">{principle.number}</span>
              <p className="text-background/90">
                <strong className="text-background">{principle.title}</strong>{" "}
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
