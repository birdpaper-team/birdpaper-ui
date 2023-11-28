import type { App } from 'vue';
import _IconRemoteControl from './icon-remote-control.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRemoteControl.name = getComponentsPrefix() + _IconRemoteControl.name;

const IconRemoteControl = Object.assign(_IconRemoteControl, {
  install: (app: App) => {
    app.component(_IconRemoteControl.name, _IconRemoteControl);
  }
});

export default IconRemoteControl;