import type { App } from 'vue';
import _IconBird from './icon-bird.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBird.name = getComponentsPrefix() + _IconBird.name;

const IconBird = Object.assign(_IconBird, {
  install: (app: App) => {
    app.component(_IconBird.name, _IconBird);
  }
});

export default IconBird;