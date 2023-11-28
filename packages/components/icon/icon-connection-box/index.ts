import type { App } from 'vue';
import _IconConnectionBox from './icon-connection-box.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConnectionBox.name = getComponentsPrefix() + _IconConnectionBox.name;

const IconConnectionBox = Object.assign(_IconConnectionBox, {
  install: (app: App) => {
    app.component(_IconConnectionBox.name, _IconConnectionBox);
  }
});

export default IconConnectionBox;