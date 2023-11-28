import type { App } from 'vue';
import _IconPlayOne from './icon-play-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayOne.name = getComponentsPrefix() + _IconPlayOne.name;

const IconPlayOne = Object.assign(_IconPlayOne, {
  install: (app: App) => {
    app.component(_IconPlayOne.name, _IconPlayOne);
  }
});

export default IconPlayOne;