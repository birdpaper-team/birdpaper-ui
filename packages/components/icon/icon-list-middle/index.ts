import type { App } from 'vue';
import _IconListMiddle from './icon-list-middle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListMiddle.name = getComponentsPrefix() + _IconListMiddle.name;

const IconListMiddle = Object.assign(_IconListMiddle, {
  install: (app: App) => {
    app.component(_IconListMiddle.name, _IconListMiddle);
  }
});

export default IconListMiddle;