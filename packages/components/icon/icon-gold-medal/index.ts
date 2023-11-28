import type { App } from 'vue';
import _IconGoldMedal from './icon-gold-medal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoldMedal.name = getComponentsPrefix() + _IconGoldMedal.name;

const IconGoldMedal = Object.assign(_IconGoldMedal, {
  install: (app: App) => {
    app.component(_IconGoldMedal.name, _IconGoldMedal);
  }
});

export default IconGoldMedal;