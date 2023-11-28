import type { App } from 'vue';
import _IconMonitorCamera from './icon-monitor-camera.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMonitorCamera.name = getComponentsPrefix() + _IconMonitorCamera.name;

const IconMonitorCamera = Object.assign(_IconMonitorCamera, {
  install: (app: App) => {
    app.component(_IconMonitorCamera.name, _IconMonitorCamera);
  }
});

export default IconMonitorCamera;