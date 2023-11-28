import type { App } from 'vue';
import _IconArrowUpDownLine from './icon-arrow-up-down-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowUpDownLine.name = getComponentsPrefix() + _IconArrowUpDownLine.name;

const IconArrowUpDownLine = Object.assign(_IconArrowUpDownLine, {
  install: (app: App) => {
    app.component(_IconArrowUpDownLine.name, _IconArrowUpDownLine);
  }
});

export default IconArrowUpDownLine;