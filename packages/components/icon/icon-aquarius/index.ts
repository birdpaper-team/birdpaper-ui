import type { App } from 'vue';
import _IconAquarius from './icon-aquarius.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAquarius.name = getComponentsPrefix() + _IconAquarius.name;

const IconAquarius = Object.assign(_IconAquarius, {
  install: (app: App) => {
    app.component(_IconAquarius.name, _IconAquarius);
  }
});

export default IconAquarius;