import type { App } from 'vue';
import _IconKitchenKnife from './icon-kitchen-knife.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKitchenKnife.name = getComponentsPrefix() + _IconKitchenKnife.name;

const IconKitchenKnife = Object.assign(_IconKitchenKnife, {
  install: (app: App) => {
    app.component(_IconKitchenKnife.name, _IconKitchenKnife);
  }
});

export default IconKitchenKnife;