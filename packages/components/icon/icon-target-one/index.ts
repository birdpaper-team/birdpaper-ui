import type { App } from 'vue';
import _IconTargetOne from './icon-target-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTargetOne.name = getComponentsPrefix() + _IconTargetOne.name;

const IconTargetOne = Object.assign(_IconTargetOne, {
  install: (app: App) => {
    app.component(_IconTargetOne.name, _IconTargetOne);
  }
});

export default IconTargetOne;