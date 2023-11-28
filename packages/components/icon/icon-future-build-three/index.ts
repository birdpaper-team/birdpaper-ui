import type { App } from 'vue';
import _IconFutureBuildThree from './icon-future-build-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFutureBuildThree.name = getComponentsPrefix() + _IconFutureBuildThree.name;

const IconFutureBuildThree = Object.assign(_IconFutureBuildThree, {
  install: (app: App) => {
    app.component(_IconFutureBuildThree.name, _IconFutureBuildThree);
  }
});

export default IconFutureBuildThree;