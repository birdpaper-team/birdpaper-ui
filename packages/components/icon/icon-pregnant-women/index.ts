import type { App } from 'vue';
import _IconPregnantWomen from './icon-pregnant-women.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPregnantWomen.name = getComponentsPrefix() + _IconPregnantWomen.name;

const IconPregnantWomen = Object.assign(_IconPregnantWomen, {
  install: (app: App) => {
    app.component(_IconPregnantWomen.name, _IconPregnantWomen);
  }
});

export default IconPregnantWomen;