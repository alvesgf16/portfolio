type TechnologyLineProps = {
  technologies: readonly string[];
};

export function TechnologyLine({ technologies }: TechnologyLineProps) {
  return (
    <p className="text-muted text-small mt-1">{technologies.join(" · ")}</p>
  );
}
