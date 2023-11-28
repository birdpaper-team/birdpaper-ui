import type { App } from 'vue';
import _IconTwitter from './icon-twitter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwitter.name = getComponentsPrefix() + _IconTwitter.name;

const IconTwitter = Object.assign(_IconTwitter, {
  install: (app: App) => {
    app.component(_IconTwitter.name, _IconTwitter);
  }
});

export default IconTwitter;