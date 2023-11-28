import type { App } from 'vue';
import _IconRoadSignBoth from './icon-road-sign-both.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoadSignBoth.name = getComponentsPrefix() + _IconRoadSignBoth.name;

const IconRoadSignBoth = Object.assign(_IconRoadSignBoth, {
  install: (app: App) => {
    app.component(_IconRoadSignBoth.name, _IconRoadSignBoth);
  }
});

export default IconRoadSignBoth;