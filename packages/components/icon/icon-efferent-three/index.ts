import type { App } from 'vue';
import _IconEfferentThree from './icon-efferent-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEfferentThree.name = getComponentsPrefix() + _IconEfferentThree.name;

const IconEfferentThree = Object.assign(_IconEfferentThree, {
  install: (app: App) => {
    app.component(_IconEfferentThree.name, _IconEfferentThree);
  }
});

export default IconEfferentThree;