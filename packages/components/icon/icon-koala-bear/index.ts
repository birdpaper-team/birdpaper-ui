import type { App } from 'vue';
import _IconKoalaBear from './icon-koala-bear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKoalaBear.name = getComponentsPrefix() + _IconKoalaBear.name;

const IconKoalaBear = Object.assign(_IconKoalaBear, {
  install: (app: App) => {
    app.component(_IconKoalaBear.name, _IconKoalaBear);
  }
});

export default IconKoalaBear;