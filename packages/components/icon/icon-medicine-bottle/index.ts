import type { App } from 'vue';
import _IconMedicineBottle from './icon-medicine-bottle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMedicineBottle.name = getComponentsPrefix() + _IconMedicineBottle.name;

const IconMedicineBottle = Object.assign(_IconMedicineBottle, {
  install: (app: App) => {
    app.component(_IconMedicineBottle.name, _IconMedicineBottle);
  }
});

export default IconMedicineBottle;