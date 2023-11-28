import type { App } from 'vue';
import _IconCattleZodiac from './icon-cattle-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCattleZodiac.name = getComponentsPrefix() + _IconCattleZodiac.name;

const IconCattleZodiac = Object.assign(_IconCattleZodiac, {
  install: (app: App) => {
    app.component(_IconCattleZodiac.name, _IconCattleZodiac);
  }
});

export default IconCattleZodiac;