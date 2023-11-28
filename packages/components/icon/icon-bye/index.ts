import type { App } from 'vue';
import _IconBye from './icon-bye.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBye.name = getComponentsPrefix() + _IconBye.name;

const IconBye = Object.assign(_IconBye, {
  install: (app: App) => {
    app.component(_IconBye.name, _IconBye);
  }
});

export default IconBye;