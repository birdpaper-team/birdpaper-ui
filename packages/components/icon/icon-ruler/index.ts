import type { App } from 'vue';
import _IconRuler from './icon-ruler.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRuler.name = getComponentsPrefix() + _IconRuler.name;

const IconRuler = Object.assign(_IconRuler, {
  install: (app: App) => {
    app.component(_IconRuler.name, _IconRuler);
  }
});

export default IconRuler;