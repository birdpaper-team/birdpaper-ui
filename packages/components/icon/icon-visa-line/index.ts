import type { App } from 'vue';
import _IconVisaLine from './icon-visa-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVisaLine.name = getComponentsPrefix() + _IconVisaLine.name;

const IconVisaLine = Object.assign(_IconVisaLine, {
  install: (app: App) => {
    app.component(_IconVisaLine.name, _IconVisaLine);
  }
});

export default IconVisaLine;