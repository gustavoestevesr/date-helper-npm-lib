export type DateType = string | number | Date;
export type PatternType =
  | DatePatterType
  | TimePatternType
  | DateTimePatterType
  | DayWeekPatternType;
export type DatePatterType = "dd/MM/yyyy" | "dd/MM/yy" | "dd/MM";
export type DateTimePatterType = "dd/MM/yyyy HH:mm" | "dd/MM/yyyy HH:mm:ss";
export type TimePatternType = "HH:mm" | "HH:mm:ss" | "mm:ss" | "mm" | "ss";
export type DayWeekPatternType = "E..EEE" | "EEE" | "EEEE" | "EEEEE";
export type DayWeekFormats = Record<DayWeekPatternType, string>;
