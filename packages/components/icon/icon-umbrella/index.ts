import type { App } from 'vue';
import _IconUmbrella from './icon-umbrella.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUmbrella.name = getComponentsPrefix() + _IconUmbrella.name;

const IconUmbrella = Object.assign(_IconUmbrella, {
  install: (app: App) => {
    app.component(_IconUmbrella.name, _IconUmbrella);
  }
});

export default IconUmbrella;