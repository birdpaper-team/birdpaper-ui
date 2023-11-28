import type { App } from 'vue';
import _IconPeoplesTwo from './icon-peoples-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeoplesTwo.name = getComponentsPrefix() + _IconPeoplesTwo.name;

const IconPeoplesTwo = Object.assign(_IconPeoplesTwo, {
  install: (app: App) => {
    app.component(_IconPeoplesTwo.name, _IconPeoplesTwo);
  }
});

export default IconPeoplesTwo;