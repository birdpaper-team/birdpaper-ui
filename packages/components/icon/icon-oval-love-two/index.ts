import type { App } from 'vue';
import _IconOvalLoveTwo from './icon-oval-love-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOvalLoveTwo.name = getComponentsPrefix() + _IconOvalLoveTwo.name;

const IconOvalLoveTwo = Object.assign(_IconOvalLoveTwo, {
  install: (app: App) => {
    app.component(_IconOvalLoveTwo.name, _IconOvalLoveTwo);
  }
});

export default IconOvalLoveTwo;