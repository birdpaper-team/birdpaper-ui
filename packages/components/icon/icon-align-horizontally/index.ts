import type { App } from 'vue';
import _IconAlignHorizontally from './icon-align-horizontally.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignHorizontally.name = getComponentsPrefix() + _IconAlignHorizontally.name;

const IconAlignHorizontally = Object.assign(_IconAlignHorizontally, {
  install: (app: App) => {
    app.component(_IconAlignHorizontally.name, _IconAlignHorizontally);
  }
});

export default IconAlignHorizontally;