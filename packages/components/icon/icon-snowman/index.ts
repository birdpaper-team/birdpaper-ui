import type { App } from 'vue';
import _IconSnowman from './icon-snowman.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSnowman.name = getComponentsPrefix() + _IconSnowman.name;

const IconSnowman = Object.assign(_IconSnowman, {
  install: (app: App) => {
    app.component(_IconSnowman.name, _IconSnowman);
  }
});

export default IconSnowman;