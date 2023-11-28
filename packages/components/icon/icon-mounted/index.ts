import type { App } from 'vue';
import _IconMounted from './icon-mounted.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMounted.name = getComponentsPrefix() + _IconMounted.name;

const IconMounted = Object.assign(_IconMounted, {
  install: (app: App) => {
    app.component(_IconMounted.name, _IconMounted);
  }
});

export default IconMounted;