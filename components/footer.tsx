export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-12">
      {/* Drawing title block — like the bottom-right corner of an
          engineering drawing. Bordered cells, mono metadata. */}
      <div className="border border-border rounded-sm overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-border">
          <div className="p-3 border-b sm:border-b-0 border-border">
            <div className="mono-label text-muted-foreground/60 text-[9px] mb-1">
              Sheet
            </div>
            <div className="mono-label text-foreground text-xs">
              DOC-001
            </div>
          </div>
          <div className="p-3 border-b sm:border-b-0 border-border">
            <div className="mono-label text-muted-foreground/60 text-[9px] mb-1">
              Drawn By
            </div>
            <div className="mono-label text-foreground text-xs">
              M. Putra
            </div>
          </div>
          <div className="p-3 border-border">
            <div className="mono-label text-muted-foreground/60 text-[9px] mb-1">
              Scale
            </div>
            <div className="mono-label text-foreground text-xs">1:1</div>
          </div>
          <div className="p-3 border-border">
            <div className="mono-label text-muted-foreground/60 text-[9px] mb-1">
              Rev
            </div>
            <div className="mono-label text-foreground text-xs">
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="border-t border-border p-3 text-center">
          <p className="mono-label text-muted-foreground text-[10px]">
            {`© ${new Date().getFullYear()} · Designed for clarity and performance`}
          </p>
        </div>
      </div>
    </footer>
  );
}
