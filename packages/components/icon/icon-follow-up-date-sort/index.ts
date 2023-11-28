import type { App } from 'vue';
import _IconFollowUpDateSort from './icon-follow-up-date-sort.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFollowUpDateSort.name = getComponentsPrefix() + _IconFollowUpDateSort.name;

const IconFollowUpDateSort = Object.assign(_IconFollowUpDateSort, {
  install: (app: App) => {
    app.component(_IconFollowUpDateSort.name, _IconFollowUpDateSort);
  }
});

export default IconFollowUpDateSort;