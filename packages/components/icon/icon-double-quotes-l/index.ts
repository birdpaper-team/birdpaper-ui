import type { App } from 'vue';
import _IconDoubleQuotesL from './icon-double-quotes-l.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoubleQuotesL.name = getComponentsPrefix() + _IconDoubleQuotesL.name;

const IconDoubleQuotesL = Object.assign(_IconDoubleQuotesL, {
  install: (app: App) => {
    app.component(_IconDoubleQuotesL.name, _IconDoubleQuotesL);
  }
});

export default IconDoubleQuotesL;