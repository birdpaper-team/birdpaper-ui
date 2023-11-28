import type { App } from 'vue';
import _IconBeerMug from './icon-beer-mug.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBeerMug.name = getComponentsPrefix() + _IconBeerMug.name;

const IconBeerMug = Object.assign(_IconBeerMug, {
  install: (app: App) => {
    app.component(_IconBeerMug.name, _IconBeerMug);
  }
});

export default IconBeerMug;