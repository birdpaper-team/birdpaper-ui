import type { App } from 'vue';
import _IconChickenZodiac from './icon-chicken-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChickenZodiac.name = getComponentsPrefix() + _IconChickenZodiac.name;

const IconChickenZodiac = Object.assign(_IconChickenZodiac, {
  install: (app: App) => {
    app.component(_IconChickenZodiac.name, _IconChickenZodiac);
  }
});

export default IconChickenZodiac;