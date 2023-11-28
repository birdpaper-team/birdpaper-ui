import type { App } from 'vue';
import _IconSagittarius from './icon-sagittarius.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSagittarius.name = getComponentsPrefix() + _IconSagittarius.name;

const IconSagittarius = Object.assign(_IconSagittarius, {
  install: (app: App) => {
    app.component(_IconSagittarius.name, _IconSagittarius);
  }
});

export default IconSagittarius;