import type { App } from 'vue';
import _IconTopbuzz from './icon-topbuzz.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTopbuzz.name = getComponentsPrefix() + _IconTopbuzz.name;

const IconTopbuzz = Object.assign(_IconTopbuzz, {
  install: (app: App) => {
    app.component(_IconTopbuzz.name, _IconTopbuzz);
  }
});

export default IconTopbuzz;