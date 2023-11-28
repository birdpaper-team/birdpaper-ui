import type { App } from 'vue';
import _IconChurchOne from './icon-church-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChurchOne.name = getComponentsPrefix() + _IconChurchOne.name;

const IconChurchOne = Object.assign(_IconChurchOne, {
  install: (app: App) => {
    app.component(_IconChurchOne.name, _IconChurchOne);
  }
});

export default IconChurchOne;