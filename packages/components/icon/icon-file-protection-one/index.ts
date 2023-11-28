import type { App } from 'vue';
import _IconFileProtectionOne from './icon-file-protection-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileProtectionOne.name = getComponentsPrefix() + _IconFileProtectionOne.name;

const IconFileProtectionOne = Object.assign(_IconFileProtectionOne, {
  install: (app: App) => {
    app.component(_IconFileProtectionOne.name, _IconFileProtectionOne);
  }
});

export default IconFileProtectionOne;