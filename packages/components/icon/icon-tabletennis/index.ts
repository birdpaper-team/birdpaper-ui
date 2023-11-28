import type { App } from 'vue';
import _IconTabletennis from './icon-tabletennis.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTabletennis.name = getComponentsPrefix() + _IconTabletennis.name;

const IconTabletennis = Object.assign(_IconTabletennis, {
  install: (app: App) => {
    app.component(_IconTabletennis.name, _IconTabletennis);
  }
});

export default IconTabletennis;