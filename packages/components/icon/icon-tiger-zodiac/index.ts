import type { App } from 'vue';
import _IconTigerZodiac from './icon-tiger-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTigerZodiac.name = getComponentsPrefix() + _IconTigerZodiac.name;

const IconTigerZodiac = Object.assign(_IconTigerZodiac, {
  install: (app: App) => {
    app.component(_IconTigerZodiac.name, _IconTigerZodiac);
  }
});

export default IconTigerZodiac;