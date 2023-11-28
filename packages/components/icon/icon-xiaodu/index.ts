import type { App } from 'vue';
import _IconXiaodu from './icon-xiaodu.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconXiaodu.name = getComponentsPrefix() + _IconXiaodu.name;

const IconXiaodu = Object.assign(_IconXiaodu, {
  install: (app: App) => {
    app.component(_IconXiaodu.name, _IconXiaodu);
  }
});

export default IconXiaodu;