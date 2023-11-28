import type { App } from 'vue';
import _IconHdmiCable from './icon-hdmi-cable.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHdmiCable.name = getComponentsPrefix() + _IconHdmiCable.name;

const IconHdmiCable = Object.assign(_IconHdmiCable, {
  install: (app: App) => {
    app.component(_IconHdmiCable.name, _IconHdmiCable);
  }
});

export default IconHdmiCable;