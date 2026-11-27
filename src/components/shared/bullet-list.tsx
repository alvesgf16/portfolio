import type { ExperienceBullet } from "@/types/domain/experience-bullet";

type BulletListProps = {
  bullets: readonly ExperienceBullet[];
};

export function BulletList({ bullets }: BulletListProps) {
  return (
    <ul className="text-body mt-3 list-disc space-y-1.5 pl-5">
      {bullets.map((bullet) => (
        <li key={bullet.id}>{bullet.text}</li>
      ))}
    </ul>
  );
}
