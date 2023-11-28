import type { App } from 'vue';
import _IconSingleQuotesL from './icon-single-quotes-l.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSingleQuotesL.name = getComponentsPrefix() + _IconSingleQuotesL.name;

const IconSingleQuotesL = Object.assign(_IconSingleQuotesL, {
  install: (app: App) => {
    app.component(_IconSingleQuotesL.name, _IconSingleQuotesL);
  }
});

export default IconSingleQuotesL;