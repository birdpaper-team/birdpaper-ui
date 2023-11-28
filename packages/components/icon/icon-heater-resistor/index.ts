import type { App } from 'vue';
import _IconHeaterResistor from './icon-heater-resistor.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeaterResistor.name = getComponentsPrefix() + _IconHeaterResistor.name;

const IconHeaterResistor = Object.assign(_IconHeaterResistor, {
  install: (app: App) => {
    app.component(_IconHeaterResistor.name, _IconHeaterResistor);
  }
});

export default IconHeaterResistor;