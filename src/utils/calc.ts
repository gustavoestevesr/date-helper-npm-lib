import type { DateType } from "../types/date-pattern.type";
import { parse } from "./format";

export function addDays(date: DateType, days: number): Date {
  const parsed = parse(date);
  parsed.setDate(parsed.getDate() + days);
  return parsed;
}

export function addMonths(date: DateType, months: number): Date {
  const parsed = parse(date);
  parsed.setMonth(parsed.getMonth() + months);
  return parsed;
}

export function addYears(date: DateType, years: number): Date {
  const parsed = parse(date);
  parsed.setFullYear(parsed.getFullYear() + years);
  return parsed;
}

export function subDays(date: DateType, days: number): Date {
  const parsed = parse(date);
  parsed.setDate(parsed.getDate() - days);
  return parsed;
}

export function subMonths(date: DateType, months: number): Date {
  const parsed = parse(date);
  parsed.setMonth(parsed.getMonth() - months);
  return parsed;
}

export function subYears(date: DateType, years: number): Date {
  const parsed = parse(date);
  parsed.setFullYear(parsed.getFullYear() - years);
  return parsed;
}
