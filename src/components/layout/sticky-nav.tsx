import type { StickyNavAnchor } from "@/types/ui/sticky-nav-anchor";

type StickyNavProps = {
  anchors: readonly StickyNavAnchor[];
};

export function StickyNav({ anchors }: StickyNavProps) {
  return (
    <nav
      aria-label="Page"
      className="border-border bg-background text-nav h-nav sticky top-0 z-10 flex items-center gap-3 overflow-x-auto border-b"
    >
      {anchors.map((anchor) => (
        <a
          key={anchor.href}
          href={anchor.href}
          className="shrink-0 hover:underline"
        >
          {anchor.label}
        </a>
      ))}
    </nav>
  );
}
