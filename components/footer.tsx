export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-border text-center text-muted-foreground text-sm">
      <p>{`© ${new Date().getFullYear()} \u2022 Designed for clarity and performance.`}</p>
    </footer>
  );
}
