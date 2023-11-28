import type { App } from 'vue';
import _IconHospital from './icon-hospital.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHospital.name = getComponentsPrefix() + _IconHospital.name;

const IconHospital = Object.assign(_IconHospital, {
  install: (app: App) => {
    app.component(_IconHospital.name, _IconHospital);
  }
});

export default IconHospital;