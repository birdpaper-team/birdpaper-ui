import type { App } from 'vue';
import _IconTime from './icon-time.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTime.name = getComponentsPrefix() + _IconTime.name;

const IconTime = Object.assign(_IconTime, {
  install: (app: App) => {
    app.component(_IconTime.name, _IconTime);
  }
});

export default IconTime;