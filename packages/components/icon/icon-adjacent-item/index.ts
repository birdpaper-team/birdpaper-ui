import type { App } from 'vue';
import _IconAdjacentItem from './icon-adjacent-item.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdjacentItem.name = getComponentsPrefix() + _IconAdjacentItem.name;

const IconAdjacentItem = Object.assign(_IconAdjacentItem, {
  install: (app: App) => {
    app.component(_IconAdjacentItem.name, _IconAdjacentItem);
  }
});

export default IconAdjacentItem;