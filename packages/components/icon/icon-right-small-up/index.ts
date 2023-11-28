import type { App } from 'vue';
import _IconRightSmallUp from './icon-right-small-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightSmallUp.name = getComponentsPrefix() + _IconRightSmallUp.name;

const IconRightSmallUp = Object.assign(_IconRightSmallUp, {
  install: (app: App) => {
    app.component(_IconRightSmallUp.name, _IconRightSmallUp);
  }
});

export default IconRightSmallUp;