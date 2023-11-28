import type { App } from 'vue';
import _IconAfroPick from './icon-afro-pick.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAfroPick.name = getComponentsPrefix() + _IconAfroPick.name;

const IconAfroPick = Object.assign(_IconAfroPick, {
  install: (app: App) => {
    app.component(_IconAfroPick.name, _IconAfroPick);
  }
});

export default IconAfroPick;