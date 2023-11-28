import type { App } from 'vue';
import _IconEfferentFour from './icon-efferent-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEfferentFour.name = getComponentsPrefix() + _IconEfferentFour.name;

const IconEfferentFour = Object.assign(_IconEfferentFour, {
  install: (app: App) => {
    app.component(_IconEfferentFour.name, _IconEfferentFour);
  }
});

export default IconEfferentFour;