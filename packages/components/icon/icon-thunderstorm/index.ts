import type { App } from 'vue';
import _IconThunderstorm from './icon-thunderstorm.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThunderstorm.name = getComponentsPrefix() + _IconThunderstorm.name;

const IconThunderstorm = Object.assign(_IconThunderstorm, {
  install: (app: App) => {
    app.component(_IconThunderstorm.name, _IconThunderstorm);
  }
});

export default IconThunderstorm;