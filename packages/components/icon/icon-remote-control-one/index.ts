import type { App } from 'vue';
import _IconRemoteControlOne from './icon-remote-control-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRemoteControlOne.name = getComponentsPrefix() + _IconRemoteControlOne.name;

const IconRemoteControlOne = Object.assign(_IconRemoteControlOne, {
  install: (app: App) => {
    app.component(_IconRemoteControlOne.name, _IconRemoteControlOne);
  }
});

export default IconRemoteControlOne;