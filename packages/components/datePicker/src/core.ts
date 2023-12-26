import { weeks_lang } from "./langs";
import { LangsType } from "./types";

/**
 * 获取周列表头数据
 * @param lang LangsType
 * @returns string[]
 */
export const getWeeksList = (lang: LangsType) => {
  return [
    weeks_lang[lang].Sunday,
    weeks_lang[lang].Monday,
    weeks_lang[lang].Tuesday,
    weeks_lang[lang].Wednesday,
    weeks_lang[lang].Thursday,
    weeks_lang[lang].Friday,
    weeks_lang[lang].Saturday,
  ];
};
