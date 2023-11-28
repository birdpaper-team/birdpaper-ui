import type { App } from 'vue';
import _IconSignalOne from './icon-signal-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSignalOne.name = getComponentsPrefix() + _IconSignalOne.name;

const IconSignalOne = Object.assign(_IconSignalOne, {
  install: (app: App) => {
    app.component(_IconSignalOne.name, _IconSignalOne);
  }
});

export default IconSignalOne;