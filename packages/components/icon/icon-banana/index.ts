import type { App } from 'vue';
import _IconBanana from './icon-banana.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBanana.name = getComponentsPrefix() + _IconBanana.name;

const IconBanana = Object.assign(_IconBanana, {
  install: (app: App) => {
    app.component(_IconBanana.name, _IconBanana);
  }
});

export default IconBanana;