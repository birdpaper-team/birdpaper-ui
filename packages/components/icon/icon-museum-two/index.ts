import type { App } from 'vue';
import _IconMuseumTwo from './icon-museum-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMuseumTwo.name = getComponentsPrefix() + _IconMuseumTwo.name;

const IconMuseumTwo = Object.assign(_IconMuseumTwo, {
  install: (app: App) => {
    app.component(_IconMuseumTwo.name, _IconMuseumTwo);
  }
});

export default IconMuseumTwo;