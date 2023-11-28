import type { App } from 'vue';
import _IconMoveInOne from './icon-move-in-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoveInOne.name = getComponentsPrefix() + _IconMoveInOne.name;

const IconMoveInOne = Object.assign(_IconMoveInOne, {
  install: (app: App) => {
    app.component(_IconMoveInOne.name, _IconMoveInOne);
  }
});

export default IconMoveInOne;