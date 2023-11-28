import type { App } from 'vue';
import _IconBusOne from './icon-bus-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBusOne.name = getComponentsPrefix() + _IconBusOne.name;

const IconBusOne = Object.assign(_IconBusOne, {
  install: (app: App) => {
    app.component(_IconBusOne.name, _IconBusOne);
  }
});

export default IconBusOne;