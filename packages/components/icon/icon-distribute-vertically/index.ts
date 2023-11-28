import type { App } from 'vue';
import _IconDistributeVertically from './icon-distribute-vertically.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDistributeVertically.name = getComponentsPrefix() + _IconDistributeVertically.name;

const IconDistributeVertically = Object.assign(_IconDistributeVertically, {
  install: (app: App) => {
    app.component(_IconDistributeVertically.name, _IconDistributeVertically);
  }
});

export default IconDistributeVertically;