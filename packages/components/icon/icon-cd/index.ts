import type { App } from 'vue';
import _IconCd from './icon-cd.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCd.name = getComponentsPrefix() + _IconCd.name;

const IconCd = Object.assign(_IconCd, {
  install: (app: App) => {
    app.component(_IconCd.name, _IconCd);
  }
});

export default IconCd;