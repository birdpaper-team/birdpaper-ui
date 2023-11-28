import type { App } from 'vue';
import _IconRecentViewsSort from './icon-recent-views-sort.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRecentViewsSort.name = getComponentsPrefix() + _IconRecentViewsSort.name;

const IconRecentViewsSort = Object.assign(_IconRecentViewsSort, {
  install: (app: App) => {
    app.component(_IconRecentViewsSort.name, _IconRecentViewsSort);
  }
});

export default IconRecentViewsSort;