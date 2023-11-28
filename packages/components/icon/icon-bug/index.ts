import type { App } from 'vue';
import _IconBug from './icon-bug.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBug.name = getComponentsPrefix() + _IconBug.name;

const IconBug = Object.assign(_IconBug, {
  install: (app: App) => {
    app.component(_IconBug.name, _IconBug);
  }
});

export default IconBug;