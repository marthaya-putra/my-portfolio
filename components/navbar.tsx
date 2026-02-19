export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border py-4">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <span className="font-bold tracking-tight text-xl text-foreground">
          {"MARTHAYA PUTRA"}
          <span className="text-primary">.</span>
        </span>
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a
            href="#case-studies"
            className="hover:text-primary transition-colors"
          >
            Work
          </a>
          <a
            href="#philosophy"
            className="hover:text-primary transition-colors"
          >
            Philosophy
          </a>
          <a
            href="/files/resume.pdf"
            download
            className="bg-foreground text-background px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
