import type { App } from 'vue';
import _IconPayCode from './icon-pay-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPayCode.name = getComponentsPrefix() + _IconPayCode.name;

const IconPayCode = Object.assign(_IconPayCode, {
  install: (app: App) => {
    app.component(_IconPayCode.name, _IconPayCode);
  }
});

export default IconPayCode;