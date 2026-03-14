import type { DateType } from "../types/date-pattern.type";
import { isBefore } from "./compare";
import { parse } from "./format";

export function isWithinInterval(
  target: DateType,
  start: DateType,
  end: DateType,
): boolean {
  const targetTime = parse(target).getTime();
  const startTime = parse(start).getTime();
  const endTime = parse(end).getTime();

  return targetTime >= startTime && targetTime <= endTime;
}

export function min(dates: DateType[]): Date | null {
  if (dates.length === 0) {
    return null;
  }

  let minDate: Date = parse(dates[0]!);

  dates.forEach((date) => {
    const parsed = parse(date);

    if (isBefore(parsed, minDate)) {
      minDate = parsed;
    }
  });

  return minDate;
}

export function max(dates: DateType[]): Date | null {
  if (dates.length === 0) {
    return null;
  }

  let maxDate: Date = parse(dates[0]!);

  dates.forEach((date) => {
    const parsed = parse(date);

    if (isBefore(parsed, maxDate)) {
      maxDate = parsed;
    }
  });

  return maxDate;
}
