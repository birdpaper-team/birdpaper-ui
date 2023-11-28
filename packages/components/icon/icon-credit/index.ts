import type { App } from 'vue';
import _IconCredit from './icon-credit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCredit.name = getComponentsPrefix() + _IconCredit.name;

const IconCredit = Object.assign(_IconCredit, {
  install: (app: App) => {
    app.component(_IconCredit.name, _IconCredit);
  }
});

export default IconCredit;