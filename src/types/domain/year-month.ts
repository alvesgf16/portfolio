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

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

/**
 * A calendar month written as `YYYY-MM` for a year from 2000 through 2199, e.g. `2025-10`.
 * The compiler checks the year range and the month.
 */
export type YearMonth = `${"20" | "21"}${Digit}${Digit}-${MonthNumber}`;
