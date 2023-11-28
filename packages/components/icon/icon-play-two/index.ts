import type { App } from 'vue';
import _IconPlayTwo from './icon-play-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayTwo.name = getComponentsPrefix() + _IconPlayTwo.name;

const IconPlayTwo = Object.assign(_IconPlayTwo, {
  install: (app: App) => {
    app.component(_IconPlayTwo.name, _IconPlayTwo);
  }
});

export default IconPlayTwo;