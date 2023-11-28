import type { App } from 'vue';
import _IconCopyrightLine from './icon-copyright-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCopyrightLine.name = getComponentsPrefix() + _IconCopyrightLine.name;

const IconCopyrightLine = Object.assign(_IconCopyrightLine, {
  install: (app: App) => {
    app.component(_IconCopyrightLine.name, _IconCopyrightLine);
  }
});

export default IconCopyrightLine;