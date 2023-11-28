import type { App } from 'vue';
import _IconAlignTextMiddle from './icon-align-text-middle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextMiddle.name = getComponentsPrefix() + _IconAlignTextMiddle.name;

const IconAlignTextMiddle = Object.assign(_IconAlignTextMiddle, {
  install: (app: App) => {
    app.component(_IconAlignTextMiddle.name, _IconAlignTextMiddle);
  }
});

export default IconAlignTextMiddle;