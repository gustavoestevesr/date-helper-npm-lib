import { TODAY_DATE, TODAY_TIME } from "../constants/constants";
import type { DateType } from "../types/date-pattern.type";
import { addDays, subDays } from "./calc";
import { endOfDay, parse, startOfDay } from "./format";

export function isEqual(date1: DateType, date2: DateType): boolean {
  return parse(date1).getTime() === parse(date2).getTime();
}

export function isFuture(date: DateType): boolean {
  return parse(date).getTime() > TODAY_TIME;
}

export function isPast(date: DateType): boolean {
  return parse(date).getTime() < TODAY_TIME;
}

export function isSameDay(date1: DateType, date2: DateType): boolean {
  return (
    startOfDay(parse(date1)).getTime() === startOfDay(parse(date2)).getTime()
  );
}

export function isToday(date: DateType): boolean {
  return startOfDay(TODAY_DATE).getTime() === startOfDay(parse(date)).getTime();
}

export function isYesterday(date: DateType): boolean {
  const yesterday = endOfDay(subDays(TODAY_DATE, 1));
  return parse(date).getTime() < yesterday.getTime();
}

export function isTomorrow(date: DateType): boolean {
  const tomorrow = startOfDay(addDays(TODAY_DATE, 1));
  return parse(date).getTime() > tomorrow.getTime();
}

export function isBefore(date1: DateType, date2: DateType): boolean {
  return parse(date1).getTime() < parse(date2).getTime();
}

export function isAfter(date1: DateType, date2: DateType): boolean {
  return parse(date1).getTime() > parse(date2).getTime();
}

export function isWeekend(date: DateType): boolean {
  const dayWeek = parse(date).getDay();
  return dayWeek === 0 || dayWeek === 6;
}