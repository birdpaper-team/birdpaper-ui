import type { App } from 'vue';
import _IconHexagonOne from './icon-hexagon-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHexagonOne.name = getComponentsPrefix() + _IconHexagonOne.name;

const IconHexagonOne = Object.assign(_IconHexagonOne, {
  install: (app: App) => {
    app.component(_IconHexagonOne.name, _IconHexagonOne);
  }
});

export default IconHexagonOne;