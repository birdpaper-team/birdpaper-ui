import type { App } from 'vue';
import _IconMaterial from './icon-material.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaterial.name = getComponentsPrefix() + _IconMaterial.name;

const IconMaterial = Object.assign(_IconMaterial, {
  install: (app: App) => {
    app.component(_IconMaterial.name, _IconMaterial);
  }
});

export default IconMaterial;