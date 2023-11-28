import type { App } from 'vue';
import _IconUnicast from './icon-unicast.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUnicast.name = getComponentsPrefix() + _IconUnicast.name;

const IconUnicast = Object.assign(_IconUnicast, {
  install: (app: App) => {
    app.component(_IconUnicast.name, _IconUnicast);
  }
});

export default IconUnicast;