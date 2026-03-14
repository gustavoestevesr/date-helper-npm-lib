import type {
    DayWeekFormats
} from "../types/date-pattern.type";

export const TODAY_DATE = new Date();
export const TODAY_TIME = TODAY_DATE.getTime();
export const DAYS_OF_WEEK_RECORD: Record<number, DayWeekFormats> = {
  0: {
    EEEEE: "Do",
    EEEE: "D",
    "E..EEE": "Dom.",
    EEE: "Domingo",
  },
  1: {
    EEEEE: "Se",
    EEEE: "S",
    "E..EEE": "Seg.",
    EEE: "Segunda",
  },
  2: {
    EEEEE: "Te",
    EEEE: "T",
    "E..EEE": "Ter.",
    EEE: "Terça",
  },
  3: {
    EEEEE: "Qa",
    EEEE: "Q",
    "E..EEE": "Qua.",
    EEE: "Quarta",
  },
  4: {
    EEEEE: "Qi",
    EEEE: "Q",
    "E..EEE": "Qui.",
    EEE: "Quinta",
  },
  5: {
    EEEEE: "Se",
    EEEE: "S",
    "E..EEE": "Sex.",
    EEE: "Sexta",
  },
  6: {
    EEEEE: "Sa",
    EEEE: "S",
    "E..EEE": "Sáb.",
    EEE: "Sábado",
  },
};
