import { App } from "vue";
import _timePicker from "./src/timePicker.vue";
import { getComponentsPrefix } from "../../utils/config";

_timePicker.name = getComponentsPrefix() + _timePicker.name;

const TimePicker = Object.assign(_timePicker, {
  install: (app: App) => {
    app.component(_timePicker.name, _timePicker);
  },
});

export type TimePickerInstance = InstanceType<typeof _timePicker>;
export default TimePicker;
