import type { App } from 'vue';
import _IconMoreFour from './icon-more-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoreFour.name = getComponentsPrefix() + _IconMoreFour.name;

const IconMoreFour = Object.assign(_IconMoreFour, {
  install: (app: App) => {
    app.component(_IconMoreFour.name, _IconMoreFour);
  }
});

export default IconMoreFour;