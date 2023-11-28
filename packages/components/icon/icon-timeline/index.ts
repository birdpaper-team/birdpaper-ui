import type { App } from 'vue';
import _IconTimeline from './icon-timeline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTimeline.name = getComponentsPrefix() + _IconTimeline.name;

const IconTimeline = Object.assign(_IconTimeline, {
  install: (app: App) => {
    app.component(_IconTimeline.name, _IconTimeline);
  }
});

export default IconTimeline;