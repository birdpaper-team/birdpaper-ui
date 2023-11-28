import type { App } from 'vue';
import _IconTurkey from './icon-turkey.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTurkey.name = getComponentsPrefix() + _IconTurkey.name;

const IconTurkey = Object.assign(_IconTurkey, {
  install: (app: App) => {
    app.component(_IconTurkey.name, _IconTurkey);
  }
});

export default IconTurkey;