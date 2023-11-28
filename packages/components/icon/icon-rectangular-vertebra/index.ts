import type { App } from 'vue';
import _IconRectangularVertebra from './icon-rectangular-vertebra.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangularVertebra.name = getComponentsPrefix() + _IconRectangularVertebra.name;

const IconRectangularVertebra = Object.assign(_IconRectangularVertebra, {
  install: (app: App) => {
    app.component(_IconRectangularVertebra.name, _IconRectangularVertebra);
  }
});

export default IconRectangularVertebra;