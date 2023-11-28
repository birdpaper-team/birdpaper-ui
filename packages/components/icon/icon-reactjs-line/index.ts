import type { App } from 'vue';
import _IconReactjsLine from './icon-reactjs-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReactjsLine.name = getComponentsPrefix() + _IconReactjsLine.name;

const IconReactjsLine = Object.assign(_IconReactjsLine, {
  install: (app: App) => {
    app.component(_IconReactjsLine.name, _IconReactjsLine);
  }
});

export default IconReactjsLine;