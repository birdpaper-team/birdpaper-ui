import type { App } from 'vue';
import _IconResting from './icon-resting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconResting.name = getComponentsPrefix() + _IconResting.name;

const IconResting = Object.assign(_IconResting, {
  install: (app: App) => {
    app.component(_IconResting.name, _IconResting);
  }
});

export default IconResting;