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
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1 min-w-0">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-foreground text-balance">
            {"I build "}
            <span className="text-primary">systems</span>
            {" that solve "}
            <span className="underline decoration-border underline-offset-8">
              product problems
            </span>
            .
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            {
              "I'm a Software Engineer who prioritizes user outcomes over clever code. I specialize in bridging the gap between complex technical constraints and business growth."
            }
          </p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg">
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
