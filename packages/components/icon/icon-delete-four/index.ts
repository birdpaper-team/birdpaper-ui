import type { App } from 'vue';
import _IconDeleteFour from './icon-delete-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteFour.name = getComponentsPrefix() + _IconDeleteFour.name;

const IconDeleteFour = Object.assign(_IconDeleteFour, {
  install: (app: App) => {
    app.component(_IconDeleteFour.name, _IconDeleteFour);
  }
});

export default IconDeleteFour;