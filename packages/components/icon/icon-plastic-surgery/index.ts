import type { App } from 'vue';
import _IconPlasticSurgery from './icon-plastic-surgery.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlasticSurgery.name = getComponentsPrefix() + _IconPlasticSurgery.name;

const IconPlasticSurgery = Object.assign(_IconPlasticSurgery, {
  install: (app: App) => {
    app.component(_IconPlasticSurgery.name, _IconPlasticSurgery);
  }
});

export default IconPlasticSurgery;