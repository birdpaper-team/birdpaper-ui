import type { App } from 'vue';
import _IconIntercom from './icon-intercom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIntercom.name = getComponentsPrefix() + _IconIntercom.name;

const IconIntercom = Object.assign(_IconIntercom, {
  install: (app: App) => {
    app.component(_IconIntercom.name, _IconIntercom);
  }
});

export default IconIntercom;