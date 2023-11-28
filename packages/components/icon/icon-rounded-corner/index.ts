import type { App } from 'vue';
import _IconRoundedCorner from './icon-rounded-corner.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoundedCorner.name = getComponentsPrefix() + _IconRoundedCorner.name;

const IconRoundedCorner = Object.assign(_IconRoundedCorner, {
  install: (app: App) => {
    app.component(_IconRoundedCorner.name, _IconRoundedCorner);
  }
});

export default IconRoundedCorner;