import { App } from "vue";
import _radio from "./src/radio.vue";
import { getComponentsPrefix } from "../../utils/config";

_radio.name = getComponentsPrefix() + _radio.name;

const Radio = Object.assign(_radio, {
  install: (app: App) => {
    app.component(_radio.name, _radio);
  },
});

export default Radio;
