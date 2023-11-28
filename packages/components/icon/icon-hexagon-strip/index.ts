import type { App } from 'vue';
import _IconHexagonStrip from './icon-hexagon-strip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHexagonStrip.name = getComponentsPrefix() + _IconHexagonStrip.name;

const IconHexagonStrip = Object.assign(_IconHexagonStrip, {
  install: (app: App) => {
    app.component(_IconHexagonStrip.name, _IconHexagonStrip);
  }
});

export default IconHexagonStrip;