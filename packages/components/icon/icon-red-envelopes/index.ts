import type { App } from 'vue';
import _IconRedEnvelopes from './icon-red-envelopes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRedEnvelopes.name = getComponentsPrefix() + _IconRedEnvelopes.name;

const IconRedEnvelopes = Object.assign(_IconRedEnvelopes, {
  install: (app: App) => {
    app.component(_IconRedEnvelopes.name, _IconRedEnvelopes);
  }
});

export default IconRedEnvelopes;