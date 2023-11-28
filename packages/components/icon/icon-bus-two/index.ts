import type { App } from 'vue';
import _IconBusTwo from './icon-bus-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBusTwo.name = getComponentsPrefix() + _IconBusTwo.name;

const IconBusTwo = Object.assign(_IconBusTwo, {
  install: (app: App) => {
    app.component(_IconBusTwo.name, _IconBusTwo);
  }
});

export default IconBusTwo;