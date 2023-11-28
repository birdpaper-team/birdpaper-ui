import type { App } from 'vue';
import _IconVerticallyCentered from './icon-vertically-centered.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVerticallyCentered.name = getComponentsPrefix() + _IconVerticallyCentered.name;

const IconVerticallyCentered = Object.assign(_IconVerticallyCentered, {
  install: (app: App) => {
    app.component(_IconVerticallyCentered.name, _IconVerticallyCentered);
  }
});

export default IconVerticallyCentered;