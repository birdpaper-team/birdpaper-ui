import type { App } from 'vue';
import _IconDislike from './icon-dislike.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDislike.name = getComponentsPrefix() + _IconDislike.name;

const IconDislike = Object.assign(_IconDislike, {
  install: (app: App) => {
    app.component(_IconDislike.name, _IconDislike);
  }
});

export default IconDislike;