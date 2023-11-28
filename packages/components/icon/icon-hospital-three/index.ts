import type { App } from 'vue';
import _IconHospitalThree from './icon-hospital-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHospitalThree.name = getComponentsPrefix() + _IconHospitalThree.name;

const IconHospitalThree = Object.assign(_IconHospitalThree, {
  install: (app: App) => {
    app.component(_IconHospitalThree.name, _IconHospitalThree);
  }
});

export default IconHospitalThree;