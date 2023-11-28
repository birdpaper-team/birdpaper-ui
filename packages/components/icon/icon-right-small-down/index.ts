import type { App } from 'vue';
import _IconRightSmallDown from './icon-right-small-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightSmallDown.name = getComponentsPrefix() + _IconRightSmallDown.name;

const IconRightSmallDown = Object.assign(_IconRightSmallDown, {
  install: (app: App) => {
    app.component(_IconRightSmallDown.name, _IconRightSmallDown);
  }
});

export default IconRightSmallDown;