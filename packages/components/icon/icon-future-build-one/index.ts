import type { App } from 'vue';
import _IconFutureBuildOne from './icon-future-build-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFutureBuildOne.name = getComponentsPrefix() + _IconFutureBuildOne.name;

const IconFutureBuildOne = Object.assign(_IconFutureBuildOne, {
  install: (app: App) => {
    app.component(_IconFutureBuildOne.name, _IconFutureBuildOne);
  }
});

export default IconFutureBuildOne;