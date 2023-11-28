import type { App } from 'vue';
import _IconArrowGoForwardLine from './icon-arrow-go-forward-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowGoForwardLine.name = getComponentsPrefix() + _IconArrowGoForwardLine.name;

const IconArrowGoForwardLine = Object.assign(_IconArrowGoForwardLine, {
  install: (app: App) => {
    app.component(_IconArrowGoForwardLine.name, _IconArrowGoForwardLine);
  }
});

export default IconArrowGoForwardLine;