import type { App } from 'vue';
import _IconHorizontalSpacingBetweenItems from './icon-horizontal-spacing-between-items.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHorizontalSpacingBetweenItems.name = getComponentsPrefix() + _IconHorizontalSpacingBetweenItems.name;

const IconHorizontalSpacingBetweenItems = Object.assign(_IconHorizontalSpacingBetweenItems, {
  install: (app: App) => {
    app.component(_IconHorizontalSpacingBetweenItems.name, _IconHorizontalSpacingBetweenItems);
  }
});

export default IconHorizontalSpacingBetweenItems;