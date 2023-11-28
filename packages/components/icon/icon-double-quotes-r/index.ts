import type { App } from 'vue';
import _IconDoubleQuotesR from './icon-double-quotes-r.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoubleQuotesR.name = getComponentsPrefix() + _IconDoubleQuotesR.name;

const IconDoubleQuotesR = Object.assign(_IconDoubleQuotesR, {
  install: (app: App) => {
    app.component(_IconDoubleQuotesR.name, _IconDoubleQuotesR);
  }
});

export default IconDoubleQuotesR;