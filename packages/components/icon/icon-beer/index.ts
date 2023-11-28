import type { App } from 'vue';
import _IconBeer from './icon-beer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBeer.name = getComponentsPrefix() + _IconBeer.name;

const IconBeer = Object.assign(_IconBeer, {
  install: (app: App) => {
    app.component(_IconBeer.name, _IconBeer);
  }
});

export default IconBeer;