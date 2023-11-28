import type { App } from 'vue';
import _IconRabbit from './icon-rabbit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRabbit.name = getComponentsPrefix() + _IconRabbit.name;

const IconRabbit = Object.assign(_IconRabbit, {
  install: (app: App) => {
    app.component(_IconRabbit.name, _IconRabbit);
  }
});

export default IconRabbit;