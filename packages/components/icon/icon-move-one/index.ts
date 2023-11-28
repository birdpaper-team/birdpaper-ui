import type { App } from 'vue';
import _IconMoveOne from './icon-move-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoveOne.name = getComponentsPrefix() + _IconMoveOne.name;

const IconMoveOne = Object.assign(_IconMoveOne, {
  install: (app: App) => {
    app.component(_IconMoveOne.name, _IconMoveOne);
  }
});

export default IconMoveOne;