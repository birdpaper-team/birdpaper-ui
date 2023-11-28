import type { App } from 'vue';
import _IconFullDressLonguette from './icon-full-dress-longuette.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullDressLonguette.name = getComponentsPrefix() + _IconFullDressLonguette.name;

const IconFullDressLonguette = Object.assign(_IconFullDressLonguette, {
  install: (app: App) => {
    app.component(_IconFullDressLonguette.name, _IconFullDressLonguette);
  }
});

export default IconFullDressLonguette;