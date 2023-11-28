import type { App } from 'vue';
import _IconRightSmall from './icon-right-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightSmall.name = getComponentsPrefix() + _IconRightSmall.name;

const IconRightSmall = Object.assign(_IconRightSmall, {
  install: (app: App) => {
    app.component(_IconRightSmall.name, _IconRightSmall);
  }
});

export default IconRightSmall;