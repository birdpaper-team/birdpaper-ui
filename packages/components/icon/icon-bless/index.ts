import type { App } from 'vue';
import _IconBless from './icon-bless.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBless.name = getComponentsPrefix() + _IconBless.name;

const IconBless = Object.assign(_IconBless, {
  install: (app: App) => {
    app.component(_IconBless.name, _IconBless);
  }
});

export default IconBless;