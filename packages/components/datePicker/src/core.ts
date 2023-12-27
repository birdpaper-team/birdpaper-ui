import { LangsType } from "./types";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/zh-cn";

export const useDayJs = (lang: LangsType) => {
  dayjs.locale(lang);
  dayjs.extend(localeData);

  /**
   * 获取周列表头数据
   * @returns string[]
   */
  const getWeeksList = () => dayjs.weekdaysMin();

  return {
    getWeeksList,
  };
};
