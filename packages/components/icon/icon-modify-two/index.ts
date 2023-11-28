import type { App } from 'vue';
import _IconModifyTwo from './icon-modify-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconModifyTwo.name = getComponentsPrefix() + _IconModifyTwo.name;

const IconModifyTwo = Object.assign(_IconModifyTwo, {
  install: (app: App) => {
    app.component(_IconModifyTwo.name, _IconModifyTwo);
  }
});

export default IconModifyTwo;