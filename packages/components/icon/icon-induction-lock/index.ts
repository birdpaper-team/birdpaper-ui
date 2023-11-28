import type { App } from 'vue';
import _IconInductionLock from './icon-induction-lock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInductionLock.name = getComponentsPrefix() + _IconInductionLock.name;

const IconInductionLock = Object.assign(_IconInductionLock, {
  install: (app: App) => {
    app.component(_IconInductionLock.name, _IconInductionLock);
  }
});

export default IconInductionLock;