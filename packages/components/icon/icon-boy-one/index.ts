import type { App } from 'vue';
import _IconBoyOne from './icon-boy-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoyOne.name = getComponentsPrefix() + _IconBoyOne.name;

const IconBoyOne = Object.assign(_IconBoyOne, {
  install: (app: App) => {
    app.component(_IconBoyOne.name, _IconBoyOne);
  }
});

export default IconBoyOne;