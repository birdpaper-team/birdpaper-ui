import type { App } from 'vue';
import _IconRedEnvelope from './icon-red-envelope.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRedEnvelope.name = getComponentsPrefix() + _IconRedEnvelope.name;

const IconRedEnvelope = Object.assign(_IconRedEnvelope, {
  install: (app: App) => {
    app.component(_IconRedEnvelope.name, _IconRedEnvelope);
  }
});

export default IconRedEnvelope;