import type { ReactNode } from "react";

type HeroFrameProps = {
  children: ReactNode;
};

export function HeroFrame({ children }: HeroFrameProps) {
  return <header className="pt-10 pb-6">{children}</header>;
}
