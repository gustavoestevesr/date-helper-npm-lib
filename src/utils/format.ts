import type { DateType, PatternType } from "../types/date-pattern.type";

export function parse(date: DateType): Date {
  if (date instanceof Date) {
    return date;
  }

  if (typeof date === "string" || typeof date === "number") {
    return new Date(date);
  }

  if (typeof date === "object" && "seconds" in date && "milliseconds" in date) {
    const timestamp = (date as any).seconds * 1000 + (date as any).milliseconds;
    return new Date(timestamp);
  }

  throw new Error("Invalid date type");
}

export function format(
  date: DateType,
  pattern: PatternType = "dd/MM/yyyy",
): string {
  const parsed = parse(date);

  const tokens: Record<string, string> = {
    dd: String(parsed.getDate()).padStart(2, "0"),
    MM: String(parsed.getMonth() + 1).padStart(2, "0"),
    yyyy: String(parsed.getFullYear()),
    yy: String(parsed.getFullYear()).slice(-2),
    HH: String(parsed.getHours()).padStart(2, "0"),
    mm: String(parsed.getMinutes()).padStart(2, "0"),
    ss: String(parsed.getSeconds()).padStart(2, "0"),
  };

  return pattern.replace(/dd|MM|yyyy|yy|HH|mm/g, (match) => tokens[match]!);
}

export function getSeconds(date: DateType): number {
  return parse(date).getSeconds();
}

export function getMinutes(date: DateType): number {
  return parse(date).getMinutes();
}

export function getHours(date: DateType): number {
  return parse(date).getHours();
}

export function startOfDay(date: DateType): Date {
  return new Date(parse(date).setHours(0, 0, 0, 0));
}

export function endOfDay(date: DateType): Date {
  return new Date(parse(date).setHours(23, 59, 59, 999));
}

export function startOfMonth(date: DateType): Date {
  return new Date(
    parse(date).getFullYear(),
    parse(date).getMonth(),
    1,
    0,
    0,
    0,
    0,
  );
}

export function endOfMonth(date: DateType): Date {
  return new Date(
    parse(date).getFullYear(),
    parse(date).getMonth() + 1,
    0,
    23,
    59,
    59,
    999,
  );
}

export function startOfYear(date: DateType): Date {
  return new Date(parse(date).getFullYear(), 0, 1, 0, 0, 0, 0);
}

export function endOfYear(date: DateType): Date {
  return new Date(parse(date).getFullYear() + 1, 0, 0, 23, 59, 59, 999);
}
