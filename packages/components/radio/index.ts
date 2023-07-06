import { App } from "vue";
import _radio from "./src/radio.vue";
import _radioGroup from "./src/radioGroup.vue";
import { getComponentsPrefix } from "../../utils/config";

_radio.name = getComponentsPrefix() + _radio.name;
_radioGroup.name = getComponentsPrefix() + _radioGroup.name;

const Radio = Object.assign(_radio, {
  install: (app: App) => {
    app.component(_radio.name, _radio);
    app.component(_radioGroup.name, _radioGroup);
  },
});

export default Radio;
