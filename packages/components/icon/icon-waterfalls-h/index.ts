import type { App } from 'vue';
import _IconWaterfallsH from './icon-waterfalls-h.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaterfallsH.name = getComponentsPrefix() + _IconWaterfallsH.name;

const IconWaterfallsH = Object.assign(_IconWaterfallsH, {
  install: (app: App) => {
    app.component(_IconWaterfallsH.name, _IconWaterfallsH);
  }
});

export default IconWaterfallsH;