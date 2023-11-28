import type { App } from 'vue';
import _IconEcg from './icon-ecg.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEcg.name = getComponentsPrefix() + _IconEcg.name;

const IconEcg = Object.assign(_IconEcg, {
  install: (app: App) => {
    app.component(_IconEcg.name, _IconEcg);
  }
});

export default IconEcg;