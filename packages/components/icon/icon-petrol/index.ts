import type { App } from 'vue';
import _IconPetrol from './icon-petrol.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPetrol.name = getComponentsPrefix() + _IconPetrol.name;

const IconPetrol = Object.assign(_IconPetrol, {
  install: (app: App) => {
    app.component(_IconPetrol.name, _IconPetrol);
  }
});

export default IconPetrol;