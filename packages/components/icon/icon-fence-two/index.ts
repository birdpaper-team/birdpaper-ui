import type { App } from 'vue';
import _IconFenceTwo from './icon-fence-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFenceTwo.name = getComponentsPrefix() + _IconFenceTwo.name;

const IconFenceTwo = Object.assign(_IconFenceTwo, {
  install: (app: App) => {
    app.component(_IconFenceTwo.name, _IconFenceTwo);
  }
});

export default IconFenceTwo;