import type { App } from 'vue';
import _IconHorseZodiac from './icon-horse-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHorseZodiac.name = getComponentsPrefix() + _IconHorseZodiac.name;

const IconHorseZodiac = Object.assign(_IconHorseZodiac, {
  install: (app: App) => {
    app.component(_IconHorseZodiac.name, _IconHorseZodiac);
  }
});

export default IconHorseZodiac;