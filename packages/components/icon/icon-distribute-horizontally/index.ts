import type { App } from 'vue';
import _IconDistributeHorizontally from './icon-distribute-horizontally.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDistributeHorizontally.name = getComponentsPrefix() + _IconDistributeHorizontally.name;

const IconDistributeHorizontally = Object.assign(_IconDistributeHorizontally, {
  install: (app: App) => {
    app.component(_IconDistributeHorizontally.name, _IconDistributeHorizontally);
  }
});

export default IconDistributeHorizontally;