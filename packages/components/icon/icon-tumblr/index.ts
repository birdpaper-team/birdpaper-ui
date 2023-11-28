import type { App } from 'vue';
import _IconTumblr from './icon-tumblr.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTumblr.name = getComponentsPrefix() + _IconTumblr.name;

const IconTumblr = Object.assign(_IconTumblr, {
  install: (app: App) => {
    app.component(_IconTumblr.name, _IconTumblr);
  }
});

export default IconTumblr;