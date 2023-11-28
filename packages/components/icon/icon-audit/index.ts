import type { App } from 'vue';
import _IconAudit from './icon-audit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAudit.name = getComponentsPrefix() + _IconAudit.name;

const IconAudit = Object.assign(_IconAudit, {
  install: (app: App) => {
    app.component(_IconAudit.name, _IconAudit);
  }
});

export default IconAudit;