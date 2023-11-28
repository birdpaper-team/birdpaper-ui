import type { App } from 'vue';
import _IconSplit from './icon-split.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSplit.name = getComponentsPrefix() + _IconSplit.name;

const IconSplit = Object.assign(_IconSplit, {
  install: (app: App) => {
    app.component(_IconSplit.name, _IconSplit);
  }
});

export default IconSplit;