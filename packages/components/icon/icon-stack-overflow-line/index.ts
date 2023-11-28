import type { App } from 'vue';
import _IconStackOverflowLine from './icon-stack-overflow-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStackOverflowLine.name = getComponentsPrefix() + _IconStackOverflowLine.name;

const IconStackOverflowLine = Object.assign(_IconStackOverflowLine, {
  install: (app: App) => {
    app.component(_IconStackOverflowLine.name, _IconStackOverflowLine);
  }
});

export default IconStackOverflowLine;