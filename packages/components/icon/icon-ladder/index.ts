import type { App } from 'vue';
import _IconLadder from './icon-ladder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLadder.name = getComponentsPrefix() + _IconLadder.name;

const IconLadder = Object.assign(_IconLadder, {
  install: (app: App) => {
    app.component(_IconLadder.name, _IconLadder);
  }
});

export default IconLadder;