import type { App } from 'vue';
import _IconCycleMovement from './icon-cycle-movement.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCycleMovement.name = getComponentsPrefix() + _IconCycleMovement.name;

const IconCycleMovement = Object.assign(_IconCycleMovement, {
  install: (app: App) => {
    app.component(_IconCycleMovement.name, _IconCycleMovement);
  }
});

export default IconCycleMovement;