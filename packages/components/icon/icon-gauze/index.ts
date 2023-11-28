import type { App } from 'vue';
import _IconGauze from './icon-gauze.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGauze.name = getComponentsPrefix() + _IconGauze.name;

const IconGauze = Object.assign(_IconGauze, {
  install: (app: App) => {
    app.component(_IconGauze.name, _IconGauze);
  }
});

export default IconGauze;