import type { App } from 'vue';
import _IconSignalTowerOne from './icon-signal-tower-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSignalTowerOne.name = getComponentsPrefix() + _IconSignalTowerOne.name;

const IconSignalTowerOne = Object.assign(_IconSignalTowerOne, {
  install: (app: App) => {
    app.component(_IconSignalTowerOne.name, _IconSignalTowerOne);
  }
});

export default IconSignalTowerOne;