import type { App } from 'vue';
import _IconMuseumOne from './icon-museum-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMuseumOne.name = getComponentsPrefix() + _IconMuseumOne.name;

const IconMuseumOne = Object.assign(_IconMuseumOne, {
  install: (app: App) => {
    app.component(_IconMuseumOne.name, _IconMuseumOne);
  }
});

export default IconMuseumOne;