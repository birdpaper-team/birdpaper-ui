import type { App } from 'vue';
import _IconPrescription from './icon-prescription.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPrescription.name = getComponentsPrefix() + _IconPrescription.name;

const IconPrescription = Object.assign(_IconPrescription, {
  install: (app: App) => {
    app.component(_IconPrescription.name, _IconPrescription);
  }
});

export default IconPrescription;