import type { App } from 'vue';
import _IconSport from './icon-sport.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSport.name = getComponentsPrefix() + _IconSport.name;

const IconSport = Object.assign(_IconSport, {
  install: (app: App) => {
    app.component(_IconSport.name, _IconSport);
  }
});

export default IconSport;