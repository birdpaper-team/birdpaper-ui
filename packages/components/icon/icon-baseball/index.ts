import type { App } from 'vue';
import _IconBaseball from './icon-baseball.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBaseball.name = getComponentsPrefix() + _IconBaseball.name;

const IconBaseball = Object.assign(_IconBaseball, {
  install: (app: App) => {
    app.component(_IconBaseball.name, _IconBaseball);
  }
});

export default IconBaseball;