import type { App } from 'vue';
import _IconAddItem from './icon-add-item.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddItem.name = getComponentsPrefix() + _IconAddItem.name;

const IconAddItem = Object.assign(_IconAddItem, {
  install: (app: App) => {
    app.component(_IconAddItem.name, _IconAddItem);
  }
});

export default IconAddItem;