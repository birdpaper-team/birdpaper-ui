import type { App } from 'vue';
import _IconHdmiConnector from './icon-hdmi-connector.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHdmiConnector.name = getComponentsPrefix() + _IconHdmiConnector.name;

const IconHdmiConnector = Object.assign(_IconHdmiConnector, {
  install: (app: App) => {
    app.component(_IconHdmiConnector.name, _IconHdmiConnector);
  }
});

export default IconHdmiConnector;