import type { App } from 'vue';
import _IconDragonZodiac from './icon-dragon-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDragonZodiac.name = getComponentsPrefix() + _IconDragonZodiac.name;

const IconDragonZodiac = Object.assign(_IconDragonZodiac, {
  install: (app: App) => {
    app.component(_IconDragonZodiac.name, _IconDragonZodiac);
  }
});

export default IconDragonZodiac;