import _datePicker from "./src/date-picker.vue";
import _yearPicker from "./src/year-picker.vue";
import _monthPicker from "./src/month-picker.vue";
import _dateRangePicker from "./src/range-picker.vue";

export const DatePicker = _datePicker;
export const YearPicker = _yearPicker;
export const MonthPicker = _monthPicker;
export const DateRangePicker = _dateRangePicker;

export * from "./src/types";
export * from "./src/props";

export type DatePickerInstance = InstanceType<typeof DatePicker>;
export type YearPickerInstance = InstanceType<typeof YearPicker>;
export type MonthPickerInstance = InstanceType<typeof MonthPicker>;
export type DateRangePickerInstance = InstanceType<typeof DateRangePicker>;
export default DatePicker;
