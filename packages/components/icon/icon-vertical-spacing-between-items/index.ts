import type { App } from 'vue';
import _IconVerticalSpacingBetweenItems from './icon-vertical-spacing-between-items.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVerticalSpacingBetweenItems.name = getComponentsPrefix() + _IconVerticalSpacingBetweenItems.name;

const IconVerticalSpacingBetweenItems = Object.assign(_IconVerticalSpacingBetweenItems, {
  install: (app: App) => {
    app.component(_IconVerticalSpacingBetweenItems.name, _IconVerticalSpacingBetweenItems);
  }
});

export default IconVerticalSpacingBetweenItems;