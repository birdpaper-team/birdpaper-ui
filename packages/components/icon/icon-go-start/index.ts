import type { App } from 'vue';
import _IconGoStart from './icon-go-start.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoStart.name = getComponentsPrefix() + _IconGoStart.name;

const IconGoStart = Object.assign(_IconGoStart, {
  install: (app: App) => {
    app.component(_IconGoStart.name, _IconGoStart);
  }
});

export default IconGoStart;