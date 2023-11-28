import type { App } from 'vue';
import _IconBackOne from './icon-back-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBackOne.name = getComponentsPrefix() + _IconBackOne.name;

const IconBackOne = Object.assign(_IconBackOne, {
  install: (app: App) => {
    app.component(_IconBackOne.name, _IconBackOne);
  }
});

export default IconBackOne;