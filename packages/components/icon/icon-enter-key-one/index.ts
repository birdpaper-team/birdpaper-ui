import type { App } from 'vue';
import _IconEnterKeyOne from './icon-enter-key-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEnterKeyOne.name = getComponentsPrefix() + _IconEnterKeyOne.name;

const IconEnterKeyOne = Object.assign(_IconEnterKeyOne, {
  install: (app: App) => {
    app.component(_IconEnterKeyOne.name, _IconEnterKeyOne);
  }
});

export default IconEnterKeyOne;