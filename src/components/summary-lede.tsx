type SummaryLedeProps = {
  summary: string;
};

export function SummaryLede({ summary }: SummaryLedeProps) {
  return (
    <p className="text-[1.0625rem] leading-normal md:text-[1.125rem]">
      {summary}
    </p>
  );
}
