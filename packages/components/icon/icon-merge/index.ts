import type { App } from 'vue';
import _IconMerge from './icon-merge.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMerge.name = getComponentsPrefix() + _IconMerge.name;

const IconMerge = Object.assign(_IconMerge, {
  install: (app: App) => {
    app.component(_IconMerge.name, _IconMerge);
  }
});

export default IconMerge;