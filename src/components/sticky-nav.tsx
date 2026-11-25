type StickyNavAnchor = {
  href: string;
  label: string;
};

type StickyNavProps = {
  anchors: readonly StickyNavAnchor[];
};

export function StickyNav({ anchors }: StickyNavProps) {
  return (
    <nav
      aria-label="Page"
      className="border-border bg-background sticky top-0 z-10 flex h-(--sticky-nav-height) items-center gap-3 overflow-x-auto border-b text-[0.8125rem]"
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
