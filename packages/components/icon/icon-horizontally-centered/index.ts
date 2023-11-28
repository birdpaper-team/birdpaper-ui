import type { App } from 'vue';
import _IconHorizontallyCentered from './icon-horizontally-centered.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHorizontallyCentered.name = getComponentsPrefix() + _IconHorizontallyCentered.name;

const IconHorizontallyCentered = Object.assign(_IconHorizontallyCentered, {
  install: (app: App) => {
    app.component(_IconHorizontallyCentered.name, _IconHorizontallyCentered);
  }
});

export default IconHorizontallyCentered;