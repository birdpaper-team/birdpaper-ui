import type { App } from 'vue';
import _IconChairOne from './icon-chair-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChairOne.name = getComponentsPrefix() + _IconChairOne.name;

const IconChairOne = Object.assign(_IconChairOne, {
  install: (app: App) => {
    app.component(_IconChairOne.name, _IconChairOne);
  }
});

export default IconChairOne;