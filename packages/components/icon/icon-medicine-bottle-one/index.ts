import type { App } from 'vue';
import _IconMedicineBottleOne from './icon-medicine-bottle-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMedicineBottleOne.name = getComponentsPrefix() + _IconMedicineBottleOne.name;

const IconMedicineBottleOne = Object.assign(_IconMedicineBottleOne, {
  install: (app: App) => {
    app.component(_IconMedicineBottleOne.name, _IconMedicineBottleOne);
  }
});

export default IconMedicineBottleOne;