type SummaryLedeProps = {
  summary: string;
};

export function SummaryLede({ summary }: SummaryLedeProps) {
  return <p className="text-lead md:text-title leading-normal">{summary}</p>;
}
