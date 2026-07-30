const skills = [
  "Next.js",
  "React",
  "Nest.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "AI",
];

export function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-6 py-24">
      {/* Drawing title-block top edge: technical metadata strip */}
      <div className="mono-label flex flex-wrap items-center gap-x-3 gap-y-1 text-primary/80 mb-8 pb-3 border-b border-dashed border-border">
        <span>DOC-001</span>
        <span className="text-border">/</span>
        <span className="text-muted-foreground">SOFTWARE ENGINEER</span>
        <span className="text-border">/</span>
        <span className="text-muted-foreground">FRONTEND · SYSTEMS · AI</span>
        <span className="text-border">/</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          OPEN TO WORK
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1 min-w-0">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-foreground text-balance">
            {"I build "}
            <span className="text-primary">systems</span>
            {" that solve "}
            <span className="underline decoration-primary decoration-2 underline-offset-8">
              product problems
            </span>
            .
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            {
              "I'm a Software Engineer who prioritizes user outcomes over clever code. I specialize in bridging the gap between complex technical constraints and business growth."
            }
          </p>

          {/* Tech-stack chips with corner ticks */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tick font-mono px-2.5 py-1 bg-primary/5 text-primary text-xs font-semibold border border-primary/20 rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <div className="tick w-48 h-48 md:w-56 md:h-56 rounded-sm overflow-hidden ring-2 ring-primary/30 shadow-lg bg-muted">
            <img
              src="/images/portrait.png"
              alt="Portrait photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
