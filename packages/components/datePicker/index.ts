import { App } from "vue";
import _datePicker from "./src/datePicker.vue";
import { getComponentsPrefix } from "../../utils/config";

_datePicker.name = getComponentsPrefix() + _datePicker.name;

const DatePicker = Object.assign(_datePicker, {
  install: (app: App) => {
    app.component(_datePicker.name, _datePicker);
  },
});

export type DatePickerInstance = InstanceType<typeof _datePicker>;
export default DatePicker;
