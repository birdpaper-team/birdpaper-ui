import type { App } from 'vue';
import _IconShieldAdd from './icon-shield-add.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShieldAdd.name = getComponentsPrefix() + _IconShieldAdd.name;

const IconShieldAdd = Object.assign(_IconShieldAdd, {
  install: (app: App) => {
    app.component(_IconShieldAdd.name, _IconShieldAdd);
  }
});

export default IconShieldAdd;