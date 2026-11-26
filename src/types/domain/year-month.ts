type MonthNumber =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

/**
 * A calendar month written as `YYYY-MM`, e.g. `2025-10`.
 * The month is checked by the compiler; `formatMonth` still guards the year at runtime.
 */
export type YearMonth = `${number}-${MonthNumber}`;
