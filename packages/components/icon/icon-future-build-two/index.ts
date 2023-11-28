import type { App } from 'vue';
import _IconFutureBuildTwo from './icon-future-build-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFutureBuildTwo.name = getComponentsPrefix() + _IconFutureBuildTwo.name;

const IconFutureBuildTwo = Object.assign(_IconFutureBuildTwo, {
  install: (app: App) => {
    app.component(_IconFutureBuildTwo.name, _IconFutureBuildTwo);
  }
});

export default IconFutureBuildTwo;