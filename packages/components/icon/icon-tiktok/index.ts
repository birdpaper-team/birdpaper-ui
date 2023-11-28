import type { App } from 'vue';
import _IconTiktok from './icon-tiktok.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTiktok.name = getComponentsPrefix() + _IconTiktok.name;

const IconTiktok = Object.assign(_IconTiktok, {
  install: (app: App) => {
    app.component(_IconTiktok.name, _IconTiktok);
  }
});

export default IconTiktok;