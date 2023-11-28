import type { App } from 'vue';
import _IconBill from './icon-bill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBill.name = getComponentsPrefix() + _IconBill.name;

const IconBill = Object.assign(_IconBill, {
  install: (app: App) => {
    app.component(_IconBill.name, _IconBill);
  }
});

export default IconBill;