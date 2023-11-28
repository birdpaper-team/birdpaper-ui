import type { App } from 'vue';
import _IconSailing from './icon-sailing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSailing.name = getComponentsPrefix() + _IconSailing.name;

const IconSailing = Object.assign(_IconSailing, {
  install: (app: App) => {
    app.component(_IconSailing.name, _IconSailing);
  }
});

export default IconSailing;