import type { App } from 'vue';
import _IconRoundTrip from './icon-round-trip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoundTrip.name = getComponentsPrefix() + _IconRoundTrip.name;

const IconRoundTrip = Object.assign(_IconRoundTrip, {
  install: (app: App) => {
    app.component(_IconRoundTrip.name, _IconRoundTrip);
  }
});

export default IconRoundTrip;