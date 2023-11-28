import type { App } from 'vue';
import _IconMedicineChest from './icon-medicine-chest.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMedicineChest.name = getComponentsPrefix() + _IconMedicineChest.name;

const IconMedicineChest = Object.assign(_IconMedicineChest, {
  install: (app: App) => {
    app.component(_IconMedicineChest.name, _IconMedicineChest);
  }
});

export default IconMedicineChest;