import type { App } from 'vue';
import _IconRightExpand from './icon-right-expand.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightExpand.name = getComponentsPrefix() + _IconRightExpand.name;

const IconRightExpand = Object.assign(_IconRightExpand, {
  install: (app: App) => {
    app.component(_IconRightExpand.name, _IconRightExpand);
  }
});

export default IconRightExpand;