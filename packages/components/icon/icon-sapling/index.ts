import type { App } from 'vue';
import _IconSapling from './icon-sapling.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSapling.name = getComponentsPrefix() + _IconSapling.name;

const IconSapling = Object.assign(_IconSapling, {
  install: (app: App) => {
    app.component(_IconSapling.name, _IconSapling);
  }
});

export default IconSapling;