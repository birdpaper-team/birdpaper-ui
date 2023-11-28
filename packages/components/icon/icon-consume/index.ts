import type { App } from 'vue';
import _IconConsume from './icon-consume.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConsume.name = getComponentsPrefix() + _IconConsume.name;

const IconConsume = Object.assign(_IconConsume, {
  install: (app: App) => {
    app.component(_IconConsume.name, _IconConsume);
  }
});

export default IconConsume;