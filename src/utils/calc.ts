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

export function differenceInMinutes(date1: DateType, date2: DateType): number {
  const parsed1 = parse(date1);
  const parsed2 = parse(date2);

  const diff = parsed1.getTime() - parsed2.getTime();

  return Math.floor(diff / (1000 * 60));
}

export function differenceInHours(date1: DateType, date2: DateType): number {
  const parsed1 = parse(date1);
  const parsed2 = parse(date2);

  const diff = parsed1.getTime() - parsed2.getTime();

  return Math.floor(diff / (1000 * 60 * 60));
}

export function differenceInDays(date1: DateType, date2: DateType): number {
  const parsed1 = parse(date1);
  const parsed2 = parse(date2);

  const diff = parsed1.getTime() - parsed2.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function differenceInMonths(date1: DateType, date2: DateType): number {
  const parsed1 = parse(date1);
  const parsed2 = parse(date2);

  return (
    (parsed1.getFullYear() - parsed2.getFullYear()) * 12 +
    (parsed1.getMonth() - parsed2.getMonth())
  );
}

export function differenceInYears(date1: DateType, date2: DateType): number {
  const parsed1 = parse(date1);
  const parsed2 = parse(date2);

  return parsed1.getFullYear() - parsed2.getFullYear();
}
