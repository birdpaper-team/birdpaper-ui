import type { App } from 'vue';
import _IconSickbed from './icon-sickbed.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSickbed.name = getComponentsPrefix() + _IconSickbed.name;

const IconSickbed = Object.assign(_IconSickbed, {
  install: (app: App) => {
    app.component(_IconSickbed.name, _IconSickbed);
  }
});

export default IconSickbed;