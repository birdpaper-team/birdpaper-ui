import type { App } from 'vue';
import _IconBedsideTwo from './icon-bedside-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBedsideTwo.name = getComponentsPrefix() + _IconBedsideTwo.name;

const IconBedsideTwo = Object.assign(_IconBedsideTwo, {
  install: (app: App) => {
    app.component(_IconBedsideTwo.name, _IconBedsideTwo);
  }
});

export default IconBedsideTwo;