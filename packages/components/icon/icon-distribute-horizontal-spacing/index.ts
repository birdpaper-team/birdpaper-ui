import type { App } from 'vue';
import _IconDistributeHorizontalSpacing from './icon-distribute-horizontal-spacing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDistributeHorizontalSpacing.name = getComponentsPrefix() + _IconDistributeHorizontalSpacing.name;

const IconDistributeHorizontalSpacing = Object.assign(_IconDistributeHorizontalSpacing, {
  install: (app: App) => {
    app.component(_IconDistributeHorizontalSpacing.name, _IconDistributeHorizontalSpacing);
  }
});

export default IconDistributeHorizontalSpacing;