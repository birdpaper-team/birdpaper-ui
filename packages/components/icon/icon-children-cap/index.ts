import type { App } from 'vue';
import _IconChildrenCap from './icon-children-cap.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChildrenCap.name = getComponentsPrefix() + _IconChildrenCap.name;

const IconChildrenCap = Object.assign(_IconChildrenCap, {
  install: (app: App) => {
    app.component(_IconChildrenCap.name, _IconChildrenCap);
  }
});

export default IconChildrenCap;