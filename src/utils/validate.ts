import type { DateType } from "../types/date-pattern.type";
import { parse } from "./format";

export function isValid(date: DateType): boolean {
  if (date === null || date === undefined) return false;

  const parsed = parse(date);
  return parsed instanceof Date && !Number.isNaN(parsed.getTime());
}

export function isDate(value: unknown): boolean {
  return value instanceof Date;
}
