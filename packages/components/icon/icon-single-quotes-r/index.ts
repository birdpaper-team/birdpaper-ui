import type { App } from 'vue';
import _IconSingleQuotesR from './icon-single-quotes-r.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSingleQuotesR.name = getComponentsPrefix() + _IconSingleQuotesR.name;

const IconSingleQuotesR = Object.assign(_IconSingleQuotesR, {
  install: (app: App) => {
    app.component(_IconSingleQuotesR.name, _IconSingleQuotesR);
  }
});

export default IconSingleQuotesR;